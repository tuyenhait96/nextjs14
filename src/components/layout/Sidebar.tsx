"use client";
import { menuItems } from "@/src/constants";
import { UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { TMenuItem } from "@/src/app/types";
import { ActiveLink } from "../common";

const Sidebar = () => {
  const { userId } = useAuth();
  return (
    <div className="hidden p-5 border-r border-r-gray-200 dark:border-opacity-10 bg-white dark:bg-grayDarker lg:flex flex-col bg-white">
      <a
        href="/"
        className="font-bold text-3xl inline-block mb-5 h-10 self-start"
      >
        <span className="text-primary">U</span>
        <span className="text-2xl font-semibold">cademy</span>
      </a>
      <ul className="flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            url={item.url}
            title={item.title}
            icon={item.icon}
          ></MenuItem>
        ))}
      </ul>
      <div className="mt-auto flex items-center justify-end gap-2">
        {/* <ModeToggle></ModeToggle> */}
        {!userId ? (
          <Link
            href="/sign-in"
            className="size-10 rounded-lg bg-primary text-white flex items-center justify-center p-1"
          >
            {/* <IconUsers /> */}
          </Link>
        ) : (
          <UserButton />
        )}
      </div>
      <UserButton/>
    </div>
  );
};

function MenuItem({ url = "/", title = "", icon }: TMenuItem) {
  return (
    <li>
      <ActiveLink url={url}>
        {icon}
        {title}
      </ActiveLink>
    </li>
  );
}

export default Sidebar;