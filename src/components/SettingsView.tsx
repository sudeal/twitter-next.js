"use client";

import {
  ChevronRight,
  Download,
  KeyRound,
  Search,
  SquareArrowOutUpRight,
  User,
  UserX,
} from "lucide-react";
import { accountSettingsItems, settingsSections } from "@/data/settings";

const detailIcons = [User, KeyRound, Download, UserX];

export default function SettingsView() {
  return (
    <div className="settings-page">
      <section className="settings-page__menu">
        <header className="settings-page__header">
          <h1 className="settings-page__title">Settings</h1>
        </header>

        <div className="settings-page__search-wrap">
          <Search size={16} className="settings-page__search-icon" />
          <input
            type="search"
            className="settings-page__search"
            placeholder="Search Settings"
            aria-label="Search Settings"
          />
        </div>

        <nav className="settings-page__nav" aria-label="Settings sections">
          {settingsSections.map((section, index) => {
            const isExternal = section === "Help Center";
            return (
              <button
                key={section}
                type="button"
                className={`settings-page__nav-item ${
                  index === 0 ? "settings-page__nav-item--active" : ""
                }`}
              >
                <span>{section}</span>
                {isExternal ? (
                  <SquareArrowOutUpRight size={16} />
                ) : (
                  <ChevronRight size={18} />
                )}
              </button>
            );
          })}
        </nav>
      </section>

      <section className="settings-page__detail">
        <div className="settings-page__detail-inner">
          <h2 className="settings-page__detail-title">Your Account</h2>
          <p className="settings-page__detail-description">
            See information about your account, download an archive of your
            data, or learn about your account deactivation options.
          </p>

          <ul className="settings-page__detail-list">
            {accountSettingsItems.map((item, index) => {
              const Icon = detailIcons[index];
              return (
                <li key={item.id}>
                  <button type="button" className="settings-page__detail-item">
                    <span className="settings-page__detail-icon-wrap">
                      <Icon size={18} />
                    </span>
                    <span className="settings-page__detail-copy">
                      <span className="settings-page__detail-item-title">
                        {item.title}
                      </span>
                      <span className="settings-page__detail-item-description">
                        {item.description}
                      </span>
                    </span>
                    <ChevronRight size={18} className="settings-page__detail-chevron" />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
