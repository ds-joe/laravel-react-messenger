import { ComponentPropsWithoutRef } from "react";


export interface UserAvatarProps extends ComponentPropsWithoutRef<'div'> {
  online?: boolean;
  avatar?: string;
  placeholderName: string;
}