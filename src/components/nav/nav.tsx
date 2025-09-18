import styles from "@/components/nav/nav.module.css";
import NavItems from "./navItems";

export default function Nav() {
  return (
    <nav className={styles.container}>
      <NavItems />
    </nav>
  );
}
