"use client";

import { useState } from "react";
import { Settings } from "lucide-react";
import NotificationList from "./NotificationList";

type Tab = "all" | "mentions";

export default function NotificationsView() {
  const [activeTab, setActiveTab] = useState<Tab>("all");

  return (
    <div className="notifications-view">
      <header className="notifications-view__header">
        <h1 className="notifications-view__title">Notifications</h1>
        <button
          type="button"
          className="notifications-view__settings"
          aria-label="Bildirim ayarları"
        >
          <Settings size={22} strokeWidth={2} />
        </button>
      </header>
      <nav className="notifications-view__tabs" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "all"}
          className={`notifications-view__tab ${
            activeTab === "all" ? "notifications-view__tab--active" : ""
          }`}
          onClick={() => setActiveTab("all")}
        >
          <span className="notifications-view__tab-text">All</span>
          {activeTab === "all" && (
            <span className="notifications-view__tab-underline" />
          )}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "mentions"}
          className={`notifications-view__tab ${
            activeTab === "mentions" ? "notifications-view__tab--active" : ""
          }`}
          onClick={() => setActiveTab("mentions")}
        >
          <span className="notifications-view__tab-text">Mentions</span>
          {activeTab === "mentions" && (
            <span className="notifications-view__tab-underline" />
          )}
        </button>
      </nav>
      <NotificationList onlyMentions={activeTab === "mentions"} />
    </div>
  );
}
