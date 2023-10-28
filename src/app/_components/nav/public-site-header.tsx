import { SiteHeader } from "@/app/_components/nav/site-header";
import { PublicMainNav } from "@/app/_components/nav/public-main-nav";
import { PublicMobileNav } from "@/app/_components/nav/public-mobile-nav";
import { SiteHeaderActions } from "@/app/_components/nav/site-header-actions";
import { ModeToggle } from "@/app/_components/ui/mode-toggle";
import { SessionButton } from "@/app/_components/ui/session-button";

export default function PublicSiteHeader() {
  return (
    <div>
      <SiteHeader>
        <PublicMainNav />
        <PublicMobileNav />
        <SiteHeaderActions>
          <ModeToggle />
          <SessionButton />
        </SiteHeaderActions>
      </SiteHeader>
    </div>
  );
}
