import React, { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { AddSnippetButton } from "./AddSnippetButton";
import { UserMenu } from "./auth/UserMenu";
import { auth } from "../../firebase.config";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { ThemeToggle } from "./ThemeToggle";
import toast from "react-hot-toast";

interface HeaderProps {
  showSearch?: boolean;
}

export const Header = ({ showSearch = true }: HeaderProps) => {

  return (
    <header className="w-full bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
      <div className="max-w-8xl mx-auto px-4 py-4 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-bold text-primary-600 dark:text-primary-400 md:px-2 lg:px-8 "
          >
            Snippet<span className="text-gray-900 dark:text-white">Store</span>
          </a>

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
