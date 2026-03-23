"use client";

import { usePathname } from "next/navigation";
import { ArrowUpRight, MoreHorizontal, Search } from "lucide-react";
import TodayNews from "./TodayNews";
import WhatsHappening from "./WhatsHappening";
import WhoToFollow from "./WhoToFollow";
import { profileTrending, profileYouMightLike } from "@/data/profile";

/**
 * Sağ sütun: arama + (opsiyonel Premium/News/WhatsHappening) + Who to follow + footer.
 * Creator Studio sayfasında sadece arama + Who to follow + footer.
 */
export default function SearchSidebar() {
  const pathname = usePathname();
  const isCreatorStudio = pathname === "/creator-studio";
  const isProfile = pathname === "/profile";
  const isLists = pathname === "/lists";
  const isSettings = pathname === "/settings";
  const isCommunities = pathname === "/communities";

  if (isSettings) {
    return null;
  }

  return (
    <aside className="search-sidebar" aria-label="Arama ve Premium">
      {!isCommunities && (
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
      )}

      {!isCreatorStudio && !isProfile && !isLists && !isCommunities && (
        <div className="search-sidebar__premium">
          <h3 className="search-sidebar__premium-title">
            Subscribe to Premium
            <span className="search-sidebar__premium-badge">50% off</span>
          </h3>
          <p className="search-sidebar__premium-desc">
            Get rid of ads, see your analytics, boost your replies and unlock
            20+ features.
          </p>
          <button type="button" className="search-sidebar__premium-btn">
            Subscribe
          </button>
        </div>
      )}

      {!isCreatorStudio && !isProfile && !isLists && !isCommunities && <TodayNews />}
      {!isCreatorStudio && !isProfile && <WhatsHappening />}

      {isProfile ? (
        <>
          <div className="who-to-follow">
            <h3 className="who-to-follow__title">You might like</h3>
            <ul className="who-to-follow__list">
              {profileYouMightLike.map((user) => (
                <li key={user.id} className="who-to-follow__item-wrapper">
                  <div className="who-to-follow__item">
                    <a href="#" className="who-to-follow__user">
                      <span className="who-to-follow__avatar-wrap">
                        <img
                          src={user.avatar}
                          alt=""
                          width={40}
                          height={40}
                          className="who-to-follow__avatar"
                        />
                      </span>
                      <span className="who-to-follow__names">
                        <span className="who-to-follow__name">{user.name}</span>
                        <span className="who-to-follow__username">
                          {user.username}
                        </span>
                      </span>
                    </a>
                    <button type="button" className="who-to-follow__btn">
                      Follow
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <a href="#" className="who-to-follow__show-more">
              Show more
            </a>
          </div>

          <div className="whats-happening">
            <h3 className="whats-happening__title">What&apos;s happening</h3>
            <ul className="whats-happening__list">
              {profileTrending.map((item) => (
                <li key={item.id} className="whats-happening__item-wrapper">
                  <a href="#" className="whats-happening__item">
                    <div className="whats-happening__item-content">
                      <span className="whats-happening__category">
                        {item.isPromoted && (
                          <ArrowUpRight
                            size={14}
                            className="whats-happening__promoted-icon"
                            aria-hidden
                          />
                        )}
                        {item.category}
                      </span>
                      <span className="whats-happening__title-text">
                        {item.title}
                      </span>
                      {"tweetCount" in item && item.tweetCount ? (
                        <span className="whats-happening__tweet-count">
                          {item.tweetCount}
                        </span>
                      ) : null}
                    </div>
                    <button
                      type="button"
                      className="whats-happening__more"
                      aria-label="More options"
                    >
                      <MoreHorizontal size={18} />
                    </button>
                  </a>
                </li>
              ))}
            </ul>
            <a href="#" className="whats-happening__show-more">
              Show more
            </a>
          </div>
        </>
      ) : (
        <WhoToFollow />
      )}

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
