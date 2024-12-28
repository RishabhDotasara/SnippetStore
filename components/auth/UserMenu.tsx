"use client"
import { useEffect, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Avatar from "@radix-ui/react-avatar";
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { auth, githubProvider } from "@/firebase.config";
import toast, { LoaderIcon } from "react-hot-toast";
import { AddSnippetButton } from "../AddSnippetButton";
import { Button } from "../ui/Button";
import GithubIcon from "../icons/GithubIcon";
import { LogOutIcon, User2Icon } from "lucide-react";
import Link from "next/link";

export const UserMenu = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isSigningIn, setIsSigningIn] = useState(false);

  const onGithubSignIn = async () => {
    try {
      setIsSigningIn(true);
      const res = await signInWithPopup(auth, githubProvider);
      const userToken = await res.user.getIdToken()
      localStorage.setItem("userToken", userToken);
      console.log(res);
      setIsSigningIn(false);
    } catch (err) {
      setIsSigningIn(false);
      console.log(err);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (err) {
      console.log("Error at logout:" + err);
      toast("Error Logging You Out! Please Try Again.");
    }
  };

  useEffect(() => {
    // toast("Hello world");
    onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return (
    <>
      {!user && (
        <Button onClick={!isSigningIn ? onGithubSignIn : undefined}>
          {isSigningIn ? (
            <LoaderIcon className="text-xl" />
          ) : (
            <span className="flex gap-2">
              <GithubIcon className="h-6 w-6 text-white" /> Sign In
            </span>
          )}
        </Button>
      )}
      {user && (
        <>
          <AddSnippetButton />
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="outline-none">
                <Avatar.Root className="inline-flex h-8 w-8 select-none items-center justify-center overflow-hidden rounded-full align-middle">
                  <Avatar.Image
                    className="h-full w-full object-cover"
                    src={user.photoURL || ""}
                    alt={user.displayName || "User avatar"}
                  />
                  <Avatar.Fallback className="text-sm font-medium uppercase bg-primary-100 text-primary-800 flex h-full w-full items-center justify-center">
                    {user.displayName?.charAt(0)}
                  </Avatar.Fallback>
                </Avatar.Root>
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content className="min-w-[200px] bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 z-50">
                <div className="px-3 py-2 border-b border-gray-100 dark:border-gray-700">
                  <p className="font-medium text-gray-900 dark:text-white">
                    {user.displayName}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {user.email}
                  </p>
                </div>
                <DropdownMenu.Item className="px-3 py-2 flexoutline-none text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer">
                  <Link href="/profile/sdfsdf" className="flex items-center gap-2">
                    <User2Icon className="h-4 w-4 " />
                    Profile
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  className="px-3 py-2 flex  items-center justify-start gap-2 outline-none text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer"
                  onClick={handleLogout}
                >
                  <LogOutIcon className="h-4 w-4" />
                  Sign Out
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </>
      )}
    </>
  );
};
