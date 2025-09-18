"use client";

import Link from "next/link";
import type { NavItem } from "./navItems";
import styles from "@/components/nav/nav.module.css";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type NavItemProps = {
  item: NavItem;
};

export default function NavItem({ item }: NavItemProps) {
  const pathName = usePathname();

  console.log(pathName);

  return (
    <div
      className={clsx(
        styles["nav-item"],
        pathName === item.href && styles["nav-item-current"]
      )}
    >
      <Link href={item.href}>{item.label}</Link>
    </div>
  );
}
