import type { User } from "./Models/User";
import type { TypeOptions } from "react-toastify";

declare global {

  // Server Page Props
  export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
      user: User;
    };
    page_words: Record<string, string>,
    notification: { message: string; type: TypeOptions } | null;
  };
}
