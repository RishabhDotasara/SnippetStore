import { SearchBar } from "./SearchBar";

import { UserMenu } from "./auth/UserMenu";

import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
``;

interface HeaderProps {
  showSearch?: boolean;
}

export const Header = ({ showSearch = true }: HeaderProps) => {
  return (
    <header className="w-full bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
      <div className="max-w-8xl mx-auto px-4 py-4 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-primary-600 dark:text-primary-400 md:px-2 lg:px-8 "
          >
            Snippet<span className="text-gray-900 dark:text-white">Store</span>
          </Link>

          {/* Right Section */}
          <div className="flex gap-4">
            <ThemeToggle />
            <UserMenu />
          </div>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="flex justify-center">
            <SearchBar />
          </div>
        )}
      </div>
    </header>
  );
};
