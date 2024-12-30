import { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { PlusIcon } from "./icons/PlusIcon";
import { CodeIcon } from "./icons/CodeIcon";
import { BlockIcon } from "./icons/BlockIcon";
import { useRouter } from "next/navigation";

export const AddSnippetButton = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const onSelect = (link: string) => {
    router.push(link);
    setOpen(false);
  };
  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <button className="p-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex items-center gap-2">
          <PlusIcon />
          {/* <span>Add New</span> */}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="min-w-[180px] bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 z-50">
          <DropdownMenu.Item
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 rounded cursor-pointer outline-none"
            onClick={() => onSelect("/create/snippet")}
          >
            <CodeIcon />
            Add Snippet
          </DropdownMenu.Item>

          <DropdownMenu.Item
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 rounded cursor-pointer outline-none"
            onClick={() => onSelect("/create/block")}
          >
            <BlockIcon />
            Add Block
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
