import type { User } from "./Models/User";
import type { TypeOptions } from "react-toastify";
import type { Page } from '@inertiajs/core'

// Pusher
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

declare global {

  interface Window {
    Pusher: typeof Pusher;
    Echo: Echo;
  }

  // Server Page Props
  export type PageProps<T extends Record<string, any> = Page['props']> = T & {
    auth: {
      user: User;
    };
    page_words: Record<string, string>,
    notification: { message: string; type: TypeOptions } | null;
  };
}
