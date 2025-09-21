import { appRoutes } from "@/constants/routes.ts";

export const siteConfig = {
  navItems: [
    {
      label: "Top Artists",
      href: appRoutes.topArtists.root,
    },
    {
      label: "Top Tracks",
      href: appRoutes.topTracks.root,
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
  },
};
