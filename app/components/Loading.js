import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.section}>
        <div className={`${styles.bar} ${styles.titleBar} ${styles.animate}`} />
        <div className={`${styles.bar} ${styles.subtitleBar} ${styles.animate}`} />
      </div>

      {/* Overview Section */}
      <div className={styles.section}>
        <div className={`${styles.bar} ${styles.sectionTitleBar} ${styles.animate}`} />
        <div className={`${styles.contentBlock} ${styles.animate}`} />
      </div>

      {/* Details Section */}
      <div className={styles.section}>
        <div
          className={`${styles.bar} ${styles.sectionTitleBar} ${styles.animate}`}
          style={{ width: "118px" }}
        />
        <div className={styles.textLines}>
          <div className={`${styles.textLine} ${styles.animate}`} />
          <div className={`${styles.textLine} ${styles.animate}`} />
          <div className={`${styles.textLine} ${styles.animate}`} />
          <div className={`${styles.textLine} ${styles.shortLine} ${styles.animate}`} />
        </div>
      </div>
    </div>
  );
}
