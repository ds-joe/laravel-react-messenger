export interface User {
  id: number;
  full_name: string;
  phone: string;
  avatar?: string | File;
  email: string;
  is_admin: boolean;
  email_verified_at?: string;
  blocked_at?: string;
  created_at?: string;
  updated_at?: string
}
