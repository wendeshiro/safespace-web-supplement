import React from "react";
import styles from "./page.module.css";
import Button from "./components/Button";
import Sort from "./components/Sort";
import ReportCard from "./components/ReportCard";
import LocationBar from "./components/LocationBar";
import { MapPin } from "lucide-react";
import reports from "./report.json";

export default function PostedReports() {
  const mapPins = [
    { id: 1, top: "456px", left: "calc(66.67% - 22px)" },
    { id: 2, top: "553px", left: "calc(75% - 30px)" },
    { id: 3, top: "426px", left: "calc(50% + 52px)" },
    { id: 4, top: "316px", left: "calc(58.33% + 13px)" },
  ];

  return (
    <main className={styles.main}>
      {/* Map Area */}
      <div className={styles.mapArea}>
        {mapPins.map((pin) => (
          <div key={pin.id} className={styles.mapPin} style={{ top: pin.top, left: pin.left }}>
            <MapPin size={48} fill="#8449DF" color="#d7c4f3ff" strokeWidth={1} />
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <div className={styles.sidebar}>
        <h1 className={styles.title}>Posted Reports</h1>

        <Button variant="tertiary">Summarize Posts</Button>

        <Sort label="Sort by:" value="Newest" className={styles.sort} />

        <div className={styles.reportList}>
          {reports.map((report) => (
            <ReportCard
              key={report.id}
              tags={report.tags}
              title={report.title}
              location={report.location}
              date={report.date}
              timestamp={report.timestamp}
              excerpt={report.excerpt}
            />
          ))}
        </div>
      </div>

      {/* Location Bar */}
      <div className={styles.locationBarWrapper}>
        <LocationBar location="3700 Willingdon Avenue, Burnaby" />
      </div>
    </main>
  );
}
