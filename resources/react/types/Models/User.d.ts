export interface User {
  id: number;
  full_name: string;
  phone: string;
  avatar?: string | File;
  email: string;
  is_admin: boolean;
  email_verified_at?: string;
  last_seen?: string;
  blocked_at?: string;
  created_at?: string;
  updated_at?: string
}


export interface UserPusherResource {
  id: number;
  full_name: string;
  phone: string;
  avatar?: string;
  email: string;
  is_admin: boolean;
  last_seen?: string;
  blocked_at?: string;
  created_at?: string;
}