# Jalankan dari mana saja, API harus aktif di localhost:4000
$base = 'http://localhost:4000'

function Api($method, $path, $body = $null, $token = $null) {
  $p = @{ Method = $method; Uri = "$base$path"; UseBasicParsing = $true; ContentType = 'application/json' }
  if ($token) { $p.Headers = @{ Authorization = "Bearer $token" } }
  if ($body) { $p.Body = ($body | ConvertTo-Json -Depth 5) }
  try {
    $r = Invoke-WebRequest @p
    [pscustomobject]@{ Status = [int]$r.StatusCode; Data = ($r.Content | ConvertFrom-Json) }
  } catch {
    [pscustomobject]@{ Status = [int]$_.Exception.Response.StatusCode; Data = $_.ErrorDetails.Message }
  }
}

function Check($name, $actual, $expected) {
  if ($actual -eq $expected) { Write-Host "PASS  $name" -ForegroundColor Green }
  else { Write-Host "FAIL  $name (dapat '$actual', harapan '$expected')" -ForegroundColor Red }
}

$s = Get-Date -Format 'HHmmss'
$a = Api POST /auth/register @{ organizationName = "WO A $s"; name = 'Andi'; email = "a$s@test.id"; password = 'rahasia123' }
$b = Api POST /auth/register @{ organizationName = "WO B $s"; name = 'Budi'; email = "b$s@test.id"; password = 'rahasia123' }
$ta = $a.Data.accessToken
$tb = $b.Data.accessToken
$orgB = $b.Data.user.organizationId

Check 'tanpa token -> 401' (Api GET /events).Status 401

$ev = @{ title = 'Resepsi Andi & Sari'; type = 'WEDDING'; venue = 'Gedung A'; startsAt = '2026-12-12T10:00:00+07:00'; endsAt = '2026-12-12T13:00:00+07:00' }
$c1 = Api POST /events $ev $ta
Check 'buat event -> 201' $c1.Status 201
$id = $c1.Data.id
Write-Host "      slug: $($c1.Data.slug), status: $($c1.Data.status), timezone: $($c1.Data.timezone)"

$c2 = Api POST /events $ev $ta
Check 'judul sama -> 201' $c2.Status 201
Check 'slug otomatis berbeda' ($c2.Data.slug -ne $c1.Data.slug) $true

Check 'slug manual duplikat -> 409' (Api POST /events (@{ title = 'X Event'; slug = $c1.Data.slug; startsAt = '2026-12-12T10:00:00+07:00' }) $ta).Status 409
Check 'endsAt sebelum startsAt -> 400' (Api POST /events (@{ title = 'Salah'; startsAt = '2026-12-12T10:00:00+07:00'; endsAt = '2026-12-12T09:00:00+07:00' }) $ta).Status 400
Check 'timezone tidak valid -> 400' (Api POST /events (@{ title = 'Salah TZ'; startsAt = '2026-12-12T10:00:00+07:00'; timezone = 'Bukan/Zona' }) $ta).Status 400
Check 'type tidak valid -> 400' (Api POST /events (@{ title = 'Salah Tipe'; type = 'PESTA'; startsAt = '2026-12-12T10:00:00+07:00' }) $ta).Status 400

# organizationId di body harus diabaikan (whitelist), event tetap milik org A
$spoof = Api POST /events (@{ title = 'Spoof'; organizationId = $orgB; startsAt = '2026-12-12T10:00:00+07:00' }) $ta
Check 'body organizationId diabaikan -> 201' $spoof.Status 201
Check 'event spoof tidak terlihat org B' (Api GET "/events/$($spoof.Data.id)" $null $tb).Status 404

$list = Api GET /events $null $ta
Check 'list -> 200' $list.Status 200
Check 'total event org A = 3' $list.Data.meta.total 3
Check 'list org B kosong' (Api GET /events $null $tb).Data.meta.total 0
Check 'filter status=PUBLISHED kosong' (Api GET '/events?status=PUBLISHED' $null $ta).Data.meta.total 0
Check 'search=resepsi -> 2' (Api GET '/events?search=resepsi' $null $ta).Data.meta.total 2
Check 'limit=2 -> 2 data' (Api GET '/events?limit=2' $null $ta).Data.data.Count 2
Check 'limit=500 -> 400' (Api GET '/events?limit=500' $null $ta).Status 400

Check 'get detail -> 200' (Api GET "/events/$id" $null $ta).Status 200
$pt = Api PATCH "/events/$id" @{ status = 'PUBLISHED'; venue = $null } $ta
Check 'patch status -> 200' $pt.Status 200
Check 'status jadi PUBLISHED' $pt.Data.status 'PUBLISHED'
Check 'venue dihapus (null)' $pt.Data.venue $null
Check 'patch endsAt < startsAt -> 400' (Api PATCH "/events/$id" @{ endsAt = '2026-12-12T08:00:00+07:00' } $ta).Status 400

# isolasi tenant: org B tidak boleh menyentuh event org A
Check 'org B GET event A -> 404' (Api GET "/events/$id" $null $tb).Status 404
Check 'org B PATCH event A -> 404' (Api PATCH "/events/$id" @{ title = 'Dibajak' } $tb).Status 404
Check 'org B DELETE event A -> 404' (Api DELETE "/events/$id" $null $tb).Status 404
Check 'judul event A tetap utuh' (Api GET "/events/$id" $null $ta).Data.title 'Resepsi Andi & Sari'

Check 'delete event kosong -> 200' (Api DELETE "/events/$($c2.Data.id)" $null $ta).Status 200
Check 'event terhapus -> 404' (Api GET "/events/$($c2.Data.id)" $null $ta).Status 404
