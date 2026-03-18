"use client";

import { usePathname } from "next/navigation";
import FeedTabs from "./FeedTabs";
import PostComposer from "./PostComposer";
import NotificationsView from "./NotificationsView";

export default function FeedColumnContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (pathname === "/notifications") {
    return (
      <>
        <NotificationsView />
        {children}
      </>
    );
  }

  if (pathname === "/explore") {
    return <>{children}</>;
  }

  if (pathname === "/follow") {
    return <>{children}</>;
  }

  if (pathname === "/creator-studio") {
    return <>{children}</>;
  }

  return (
    <>
      <FeedTabs />
      <PostComposer />
      {children}
    </>
  );
}
