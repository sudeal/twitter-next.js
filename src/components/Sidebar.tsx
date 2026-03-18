"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import {
  Home,
  Search,
  Bell,
  UserPlus,
  Mail,
  Bookmark,
  User,
  MoreHorizontal,
  CircleEllipsis,
  FlaskConical,
  Sparkles,
  List,
  Users,
  Zap,
  SquareArrowUpRight,
  Mic2,
  Settings,
  PenSquare,
} from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", active: true, href: "/" },
  { icon: Search, label: "Explore", href: "/explore" },
  { icon: Bell, label: "Notifications", href: "/notifications" },
  { icon: UserPlus, label: "Follow", href: "/follow" },
  { icon: Mail, label: "Chat" },
  { icon: Sparkles, label: "Grok", grok: true },
  { icon: Bookmark, label: "Bookmarks" },
  { icon: FlaskConical, label: "Creator Studio", href: "/creator-studio" },
  { icon: null, label: "Premium", premium: true },
  { icon: User, label: "Profile", href: "/profile" },
  { icon: CircleEllipsis, label: "More", isMore: true },
];

const moreMenuItems = [
  { icon: List, label: "Lists", href: "/lists" },
  { icon: Users, label: "Communities" },
  { icon: Zap, label: "Business" },
  { icon: SquareArrowUpRight, label: "Ads" },
  { icon: Mic2, label: "Create your Space" },
  { icon: Settings, label: "Settings and privacy", href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const moreWrapRef = useRef<HTMLDivElement>(null);
  const moreMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (
        profileMenuOpen &&
        profileRef.current &&
        !profileRef.current.contains(target) &&
        menuRef.current &&
        !menuRef.current.contains(target)
      ) {
        setProfileMenuOpen(false);
      }
      if (
        moreMenuOpen &&
        moreWrapRef.current &&
        !moreWrapRef.current.contains(target) &&
        moreMenuRef.current &&
        !moreMenuRef.current.contains(target)
      ) {
        setMoreMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [profileMenuOpen, moreMenuOpen]);

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar__logo">
        <button
          type="button"
          className="sidebar__logo-btn"
          aria-label="X Home"
        >
          <span className="sidebar__logo-icon">𝕏</span>
        </button>
      </div>

      {/* Navigation - dikey liste */}
      <nav className="sidebar__nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          const href = "href" in item ? item.href : undefined;
          const isActive =
            "active" in item && item.active
              ? pathname === "/"
              : href
                ? pathname === href
                : false;
          const isGrok = item.grok;
          const isPremium = item.premium;
          const isMore = "isMore" in item && item.isMore;

          if (isMore) {
            return (
              <div key={item.label} className="sidebar__nav-more-wrap" ref={moreWrapRef}>
                {moreMenuOpen && (
                  <div
                    ref={moreMenuRef}
                    className="sidebar__more-menu"
                    role="menu"
                    aria-label="Daha fazla seçenek"
                  >
                    {moreMenuItems.map((moreItem) => {
                      const MoreIcon = moreItem.icon;
                      const moreHref =
                        "href" in moreItem ? moreItem.href : undefined;

                      if (moreHref) {
                        return (
                          <Link
                            key={moreItem.label}
                            href={moreHref}
                            className="sidebar__more-menu-item"
                            role="menuitem"
                            onClick={() => setMoreMenuOpen(false)}
                          >
                            <MoreIcon size={22} strokeWidth={2} />
                            <span>{moreItem.label}</span>
                          </Link>
                        );
                      }

                      return (
                        <button
                          key={moreItem.label}
                          type="button"
                          className="sidebar__more-menu-item"
                          role="menuitem"
                          onClick={() => setMoreMenuOpen(false)}
                        >
                          <MoreIcon size={22} strokeWidth={2} />
                          <span>{moreItem.label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
                <button
                  type="button"
                  className="sidebar__nav-item"
                  aria-expanded={moreMenuOpen}
                  aria-haspopup="menu"
                  onClick={() => setMoreMenuOpen((prev) => !prev)}
                >
                  {Icon && (
                    <span className="sidebar__nav-icon-wrap">
                      <Icon
                        size={26}
                        strokeWidth={1.75}
                        className="sidebar__nav-icon-svg"
                      />
                    </span>
                  )}
                  <span className="sidebar__nav-label">{item.label}</span>
                </button>
              </div>
            );
          }

          const navContent = (
            <>
              {isPremium ? (
                <span className="sidebar__nav-icon sidebar__nav-icon--premium">
                  𝕏
                </span>
              ) : Icon ? (
                <span className="sidebar__nav-icon-wrap">
                  <Icon
                    size={26}
                    strokeWidth={1.75}
                    className="sidebar__nav-icon-svg"
                  />
                  {isGrok && <span className="sidebar__grok-dot" />}
                </span>
              ) : null}
              <span
                className={`sidebar__nav-label ${
                  isActive ? "sidebar__nav-label--active" : ""
                }`}
              >
                {item.label}
              </span>
              {isPremium && (
                <span className="sidebar__premium-badge">50% off</span>
              )}
            </>
          );

          if (href) {
            return (
              <Link
                key={item.label}
                href={href}
                className="sidebar__nav-item"
              >
                {navContent}
              </Link>
            );
          }

          return (
            <button
              key={item.label}
              type="button"
              className="sidebar__nav-item"
            >
              {navContent}
            </button>
          );
        })}
      </nav>

      {/* Post butonu */}
      <div className="sidebar__post-wrap">
        <button type="button" className="sidebar__post-btn" aria-label="Post">
          <span className="sidebar__post-btn-icon" aria-hidden>
            <PenSquare size={24} strokeWidth={2} />
          </span>
          <span className="sidebar__post-btn-text">Post</span>
        </button>
      </div>

      {/* Kullanıcı profili + menü */}
      <div className="sidebar__profile-wrap" ref={profileRef}>
        {profileMenuOpen && (
          <div
            ref={menuRef}
            className="sidebar__profile-menu"
            role="menu"
            aria-label="Hesap işlemleri"
          >
            <button
              type="button"
              className="sidebar__profile-menu-item"
              role="menuitem"
              onClick={() => setProfileMenuOpen(false)}
            >
              Add an existing account
            </button>
            <button
              type="button"
              className="sidebar__profile-menu-item"
              role="menuitem"
              onClick={() => setProfileMenuOpen(false)}
            >
              Log out @SudeAlkn02
            </button>
            <span className="sidebar__profile-menu-caret" aria-hidden />
          </div>
        )}
        <div className="sidebar__profile">
          <div className="sidebar__profile-avatar">SA</div>
          <div className="sidebar__profile-info">
            <p className="sidebar__profile-name">Sude Alkan</p>
            <p className="sidebar__profile-handle">@SudeAlkn02</p>
          </div>
          <button
            type="button"
            className="sidebar__profile-more"
            aria-expanded={profileMenuOpen}
            aria-haspopup="menu"
            aria-label="Hesap menüsü"
            onClick={() => setProfileMenuOpen((prev) => !prev)}
          >
            <MoreHorizontal size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
}
