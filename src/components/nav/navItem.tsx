import Link from "next/link";
import type { NavItem } from "./navItems";
import styles from "@/components/nav/nav.module.css";
import Text from "../text/text";

type NavItemProps = {
  item: NavItem;
};

export default function NavItem({ item }: NavItemProps) {
  return (
    <div className={styles["nav-item"]}>
      <Link href={item.href}>{item.label}</Link>
    </div>
  );
}
