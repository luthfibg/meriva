// Bentuk data mengikuti respons apps/api. Perbarui bila skema backend berubah.

export type EventType =
  | "WEDDING"
  | "BIRTHDAY"
  | "CORPORATE"
  | "GATHERING"
  | "OTHER";

export type EventStatus = "DRAFT" | "PUBLISHED" | "COMPLETED" | "CANCELLED";

export type MemberRole =
  | "OWNER"
  | "ADMIN"
  | "EVENT_MANAGER"
  | "CHECKIN_STAFF"
  | "VIEWER";

export interface Event {
  id: string;
  organizationId: string;
  title: string;
  slug: string;
  type: EventType;
  status: EventStatus;
  startsAt: string;
  endsAt: string | null;
  timezone: string;
  venue: string | null;
  description: string | null;
  createdAt: string;
  _count?: { invitations?: number; guestGroups?: number };
}

export interface Paginated<T> {
  data: T[];
  meta: { page: number; limit: number; total: number; totalPages: number };
}

export interface AuthResponse {
  accessToken: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: MemberRole;
    organizationId: string;
  };
}

export interface Me {
  id: string;
  name: string;
  email: string;
  role: MemberRole;
  organization: { id: string; name: string; slug: string };
}
