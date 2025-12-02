import styles from "./ReportDetails.module.css";
import BackButton from "./BackButton";

export default function ReportDetails({ report, onBack }) {
  if (!report) return null;

  return (
    <div className={styles.container}>
      <BackButton className={styles.backButton} onClick={onBack} />

      <div className={styles.header}>
        <h1 className={styles.title}>{report.title}</h1>
        <div className={styles.meta}>
          <span>{report.date}</span>
          <span>{report.timestamp}</span>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Type of Report</h2>
        <div className={styles.tags}>
          {report.tags &&
            report.tags.map((tag, index) => (
              <div key={index} className={styles.chip}>
                <span className={styles.chipText}>{tag}</span>
              </div>
            ))}
        </div>
      </div>

      {/* Trades Field is not in the JSON data, so we'll omit it for now or make it optional */}
      {report.trade && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Trades Field</h2>
          <div className={styles.tags}>
            <div className={styles.chip}>
              <span className={styles.chipText}>{report.trade}</span>
            </div>
          </div>
        </div>
      )}

      <div className={styles.section}>
        <div className={styles.summaryHeader}>
          <h2 className={styles.sectionTitle}>AI Summary</h2>
          <span className={styles.aiLabel}>GPT-4o</span>
        </div>
        <div className={styles.summaryText}>
          <p>{report.summary}</p>
        </div>
      </div>

      {report.actions && (
        <div className={`${styles.section} ${styles.actionSection}`}>
          <div className={styles.summaryHeader}>
            <h2 className={styles.sectionTitle}>Recommended Actions</h2>
          </div>
          {report.actions.map((action, index) => (
            <div key={index} className={styles.actionItem}>
              <p className={styles.actionText}>{action}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
