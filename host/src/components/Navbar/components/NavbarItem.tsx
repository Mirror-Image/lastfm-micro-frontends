import { NavbarItem as HeroUINavbarItem } from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import { useLocation } from "react-router-dom";
import { Link } from "@heroui/link";
import clsx from "clsx";
import { FC } from "react";

interface INavbarItemProps {
  label: string;
  href: string;
}

export const NavbarItem: FC<INavbarItemProps> = ({ label, href }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <HeroUINavbarItem key={href}>
      <Link
        className={clsx(
          linkStyles({ color: "foreground" }),
          "data-[active=true]:text-fuchsia-400 data-[active=true]:font-medium",
        )}
        color="foreground"
        data-active={isActive}
        href={href}
      >
        {label}
      </Link>
    </HeroUINavbarItem>
  );
};
