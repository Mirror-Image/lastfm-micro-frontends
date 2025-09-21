import { Link } from "@heroui/link";
import { Tooltip } from "@heroui/tooltip";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
} from "@heroui/navbar";

import { siteConfig } from "./constants";
import { NavbarItem } from "./components/NavbarItem.tsx";

import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon } from "@/components/icons";
import { appRoutes } from "@/constants/routes.ts";

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href={appRoutes.root}
          >
            <p className="font-bold text-inherit">LastFM MFE</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <div className="lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href} href={item.href} label={item.label} />
          ))}
        </div>
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4" justify="end">
        <Tooltip content="Follow to Maksim Borovik GitHub profile page">
          <Link isExternal href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
        </Tooltip>
        <ThemeSwitch />
      </NavbarContent>
    </HeroUINavbar>
  );
};
