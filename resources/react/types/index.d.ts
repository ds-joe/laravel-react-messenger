// Models
import type { User } from "./Models/User";

declare global {

  // Server Page Props
  export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
      user: User;
      page_words: Record<string, string>
    };
  };
}
