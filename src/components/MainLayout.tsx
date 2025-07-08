import { Outlet } from "react-router-dom";
import styles from "../App.module.scss";

export default function MainLayout() {
  return (
    <main className={styles.container}>
      <Outlet />
    </main>
  );
}
