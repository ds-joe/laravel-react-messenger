// Dependencies
import { usePage } from "@inertiajs/react";

const GlobalTab: RC = () => {
  const { page_words } = usePage().props as PageProps;

  return (
    <div className="h-full w-full text-xl font-semibold flex items-center justify-center">
      {page_words?.soon}
    </div>
  )
}

export default GlobalTab;