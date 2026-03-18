"use client";

import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import TodayNews from "./TodayNews";
import WhatsHappening from "./WhatsHappening";
import WhoToFollow from "./WhoToFollow";

/**
 * Sağ sütun: arama + (opsiyonel Premium/News/WhatsHappening) + Who to follow + footer.
 * Creator Studio sayfasında sadece arama + Who to follow + footer.
 */
export default function SearchSidebar() {
  const pathname = usePathname();
  const isCreatorStudio = pathname === "/creator-studio";

  return (
    <aside className="search-sidebar" aria-label="Arama ve Premium">
      <div className="search-sidebar__box">
        <Search
          size={18}
          className="search-sidebar__icon"
          aria-hidden
        />
        <input
          type="search"
          className="search-sidebar__input"
          placeholder="Search"
          aria-label="Search"
        />
      </div>

      {!isCreatorStudio && (
      <div className="search-sidebar__premium">
        <h3 className="search-sidebar__premium-title">
          Subscribe to Premium
          <span className="search-sidebar__premium-badge">50% off</span>
        </h3>
        <p className="search-sidebar__premium-desc">
          Get rid of ads, see your analytics, boost your replies and unlock 20+
          features.
        </p>
        <button type="button" className="search-sidebar__premium-btn">
          Subscribe
        </button>
      </div>
      )}

      {!isCreatorStudio && <TodayNews />}
      {!isCreatorStudio && <WhatsHappening />}
      <WhoToFollow />
      <div className="who-to-follow__footer">
        <div className="who-to-follow__footer-links">
          <a href="#" className="who-to-follow__footer-link">
            Terms of Service
          </a>
          <span className="who-to-follow__footer-separator">|</span>
          <a href="#" className="who-to-follow__footer-link">
            Privacy Policy
          </a>
          <span className="who-to-follow__footer-separator">|</span>
          <a href="#" className="who-to-follow__footer-link">
            Cookie Policy
          </a>
          <span className="who-to-follow__footer-separator">|</span>
          <a href="#" className="who-to-follow__footer-link">
            Imprint
          </a>
          <span className="who-to-follow__footer-separator">|</span>
          <a href="#" className="who-to-follow__footer-link">
            Accessibility
          </a>
          <span className="who-to-follow__footer-separator">|</span>
          <a href="#" className="who-to-follow__footer-link">
            Ads info
          </a>
          <span className="who-to-follow__footer-separator">|</span>
          <a href="#" className="who-to-follow__footer-link">
            More ...
          </a>
        </div>
        <div className="who-to-follow__footer-copy">© 2026 X Corp.</div>
      </div>
    </aside>
  );
}
