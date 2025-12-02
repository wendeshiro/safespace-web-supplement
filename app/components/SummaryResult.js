import styles from "./SummaryResult.module.css";
import BackButton from "./BackButton";

export default function SummaryResult() {
  return (
    <div className={styles.container}>
      <BackButton className={styles.backButton} />

      <div className={styles.header}>
        <h1 className={styles.title}>3700 Willingdon Avenue, Burnaby</h1>
        <div className={styles.meta}>
          <span>Summarizing posts within 50km</span>
          <span>GPT-4o</span>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.summaryHeader}>
          <h2 className={styles.sectionTitle}>Overview</h2>
        </div>
        <div className={styles.summaryText}>
          <p>
            During October 2025, a total of fourteen incident reports were submitted across six
            worksites, highlighting ongoing concerns related to harassment, discrimination, and
            physical safety. Several reports described gender-based jokes, sexual comments from
            subcontractors, inappropriate group-chat content, and repeated misgendering of a
            nonbinary worker. Additional discrimination concerns included mocking of cultural
            accents and unequal task assignments affecting a tradeswoman’s access to higher-skill
            work. These behaviours contributed to reduced morale, emotional distress, and a
            generally hostile environment for women, queer workers, and workers of colour across
            multiple sites.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.summaryHeader}>
          <h2 className={styles.sectionTitle}>Main Concerns</h2>
        </div>
        <div className={styles.summaryText}>
          <ul className={styles.listItem}>
            <li>
              Normalizing harmful behavior: Jokes dismissed as “fun” or “just how site banter
              works.”
            </li>
            <li>
              Weak supervisory intervention: Several issues escalated only after multiple
              occurrences.
            </li>
            <li>
              Underreported discrimination: Workers hesitated to report misgendering or cultural
              mockery.
            </li>
            <li>
              Cross-trade miscommunication: Many safety hazards linked to busy multi-trade areas.
            </li>
          </ul>
        </div>
      </div>

      <div className={`${styles.section} ${styles.actionSection}`}>
        <h2 className={styles.sectionTitle}>Recommended Actions</h2>
        <div className={styles.actionItem}>
          <p className={styles.actionText}>Mandatory quarterly respect & inclusion training</p>
        </div>
        <div className={styles.actionItem}>
          <p className={styles.actionText}>Anonymous reporting awareness campaign</p>
        </div>
        <div className={styles.actionItem}>
          <p className={styles.actionText}>Standardized incident follow-up pathway</p>
        </div>
        <div className={styles.actionItem}>
          <p className={styles.actionText}>Weekly joint safety walk-throughs</p>
        </div>
      </div>
    </div>
  );
}
