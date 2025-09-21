import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { siteConfig } from "./constants";

import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon } from "@/components/icons";
import { appRoutes } from "@/constants/routes.ts";

export const Navbar = () => (
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
          <NavbarItem key={item.href}>
            <Link
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium",
              )}
              color="foreground"
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </div>
    </NavbarContent>

    <NavbarContent className="basis-1 pl-4" justify="end">
      <Link isExternal href={siteConfig.links.github}>
        <GithubIcon className="text-default-500" />
      </Link>
      <ThemeSwitch />
    </NavbarContent>
  </HeroUINavbar>
);
