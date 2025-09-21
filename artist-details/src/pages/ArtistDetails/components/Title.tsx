import { FC, ReactNode, ComponentProps } from "react";
import { cn } from "@heroui/theme";

interface ITitleProps extends ComponentProps<"h2"> {
  children?: ReactNode;
  size?: "xl" | "lg" | "base" | "sm";
}
export const Title: FC<ITitleProps> = ({
  size = "lg",
  className,
  ...props
}) => {
  return (
    <h2
      className={cn(
        "w-auto bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 leading-tight font-extrabold",
        {
          "text-[3rem] md:text-[6rem]": size === "xl",
          "text-[4.4rem]": size === "lg",
          "text-[2.25rem]": size === "base",
        },
        className,
      )}
      {...props}
    />
  );
};
