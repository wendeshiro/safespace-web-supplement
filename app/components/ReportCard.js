import { forwardRef } from "react";
import styles from "./ReportCard.module.css";

const ReportCard = forwardRef(
  (
    { tags = [], title, location, excerpt, date, timestamp, onDetailsPress, isHighlighted },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`${styles.wrapper} ${isHighlighted ? styles.highlighted : ""}`}
        onClick={onDetailsPress}
      >
        <div className={styles.card}>
          <div className={styles.topBlock}>
            <span className={styles.tags} title={tags.join(", ")}>
              {tags.join(", ")}
            </span>
          </div>

          <h3 className={styles.title} title={title}>
            {title}
          </h3>

          {location && <p className={styles.location}>{location}</p>}
          <div className={styles.timeRow}>
            {date && <span className={styles.date}>{date}</span>}
            {timestamp && <span className={styles.timestamp}>{timestamp}</span>}
          </div>
          {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
        </div>
      </div>
    );
  }
);

ReportCard.displayName = "ReportCard";

export default ReportCard;
