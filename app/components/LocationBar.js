import styles from "./LocationBar.module.css";
import { Locate } from "lucide-react";

export default function LocationBar({ location = "3700 Willingdon Avenue, Burnaby" }) {
  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <div className={styles.iconWrapper}>
          <Locate color="#7842CB" size={24} />
        </div>
        <p className={styles.text}>{location}</p>
      </div>
    </div>
  );
}
