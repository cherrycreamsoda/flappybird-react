import styles from "./page.module.css";
import GameWrapper from "@/components/GameWrapper/GameWrapper";

export default function Home() {
  return (
    <div className={styles.container}>
      <GameWrapper />
    </div>
  );
}
