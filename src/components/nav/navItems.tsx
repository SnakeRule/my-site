import NavItem from "./navItem";
import styles from "@/components/nav/nav.module.css";

export type NavItem = {
  label: string;
  href: string;
};

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Photos",
    href: "/photos",
  },
  {
    label: "Electricity",
    href: "/electricity",
  },
];

export default function NavItems() {
  return (
    <div className={styles["nav-item-container"]}>
      {navItems.map((item) => (
        <NavItem key={item.href} item={item} />
      ))}
    </div>
  );
}
