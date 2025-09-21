import { NavbarItem as HeroUINavbarItem } from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "@heroui/link";
import clsx from "clsx";
import { FC } from "react";

interface INavbarItemProps {
  label: string;
  href: string;
}

export const NavbarItem: FC<INavbarItemProps> = ({ label, href }) => {
  const location = useLocation();
  const isActive = location.pathname.includes(href);

  const { name } = useParams<{ name: string }>();

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
        {isActive ? [label, name].filter(Boolean).join(" / ") : label}
      </Link>
    </HeroUINavbarItem>
  );
};
