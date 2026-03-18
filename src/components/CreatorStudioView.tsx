"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ChevronRight,
  Flame,
  CreditCard,
  Sparkles,
  BarChart2,
  Mail,
  HelpCircle,
} from "lucide-react";

const programs = [
  {
    id: "revenue",
    title: "Revenue Sharing",
    subtitle: "Earn from your posts",
    status: "Ineligible",
    href: "#",
    icon: Flame,
  },
  {
    id: "subs",
    title: "Subscriptions",
    subtitle: "Ineligible",
    status: "Ineligible",
    href: "#",
    icon: CreditCard,
  },
];

const tools = [
  {
    id: "inspiration",
    title: "Inspiration",
    subtitle: "Top posts by engagement",
    href: "#",
    icon: Sparkles,
  },
  {
    id: "analytics",
    title: "Analytics",
    subtitle: "View your performance",
    href: "#",
    icon: BarChart2,
  },
];

const support = [
  {
    id: "contact",
    title: "Contact Support",
    subtitle: "Send a DM to @Premium",
    href: "#",
    icon: Mail,
  },
  {
    id: "learn",
    title: "Learn more",
    subtitle: null,
    href: "#",
    icon: HelpCircle,
  },
];

export default function CreatorStudioView() {
  return (
    <div className="creator-studio">
      <header className="creator-studio__header">
        <Link
          href="/"
          className="creator-studio__back"
          aria-label="Back"
        >
          <ArrowLeft size={20} strokeWidth={2} />
        </Link>
        <h1 className="creator-studio__title">Creator Studio</h1>
      </header>

      <section className="creator-studio__section">
        <h2 className="creator-studio__section-title">Programs</h2>
        <ul className="creator-studio__list">
          {programs.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <Link href={item.href} className="creator-studio__row">
                  <span className="creator-studio__icon-wrap">
                    <Icon size={20} className="creator-studio__icon" />
                  </span>
                  <div className="creator-studio__row-content">
                    <span className="creator-studio__row-title">{item.title}</span>
                    <span className="creator-studio__row-subtitle">
                      {item.subtitle}
                    </span>
                  </div>
                  <div className="creator-studio__row-right">
                    {item.status && (
                      <span className="creator-studio__status">{item.status}</span>
                    )}
                    <ChevronRight size={20} className="creator-studio__chevron" />
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="creator-studio__section">
        <h2 className="creator-studio__section-title">Tools</h2>
        <ul className="creator-studio__list">
          {tools.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <Link href={item.href} className="creator-studio__row">
                  <span className="creator-studio__icon-wrap">
                    <Icon size={20} className="creator-studio__icon" />
                  </span>
                  <div className="creator-studio__row-content">
                    <span className="creator-studio__row-title">{item.title}</span>
                    <span className="creator-studio__row-subtitle">
                      {item.subtitle}
                    </span>
                  </div>
                  <ChevronRight size={20} className="creator-studio__chevron" />
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="creator-studio__section">
        <h2 className="creator-studio__section-title">Support</h2>
        <ul className="creator-studio__list">
          {support.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <Link href={item.href} className="creator-studio__row">
                  <span className="creator-studio__icon-wrap">
                    <Icon size={20} className="creator-studio__icon" />
                  </span>
                  <div className="creator-studio__row-content">
                    <span className="creator-studio__row-title">{item.title}</span>
                    {item.subtitle && (
                      <span className="creator-studio__row-subtitle">
                        {item.subtitle}
                      </span>
                    )}
                  </div>
                  <ChevronRight size={20} className="creator-studio__chevron" />
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
