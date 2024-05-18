import { ReactElement } from "react";
import NextLink from "./NextLink";

interface ListItemLinkProps {
  href: string;
  liClassName?: string;
  linkClassName?: string;
  title: string | ReactElement;
  textColor?: string;  // New prop to control text color
}

export default function ListItemLink({
  href,
  title,
  liClassName = "nav-item",
  linkClassName = "nav-link",
  textColor = "text-black" // Default text color
}: ListItemLinkProps) {
  return (
    <li className={`${liClassName} ${textColor}`}>
      <NextLink className={linkClassName} href={href} title={title} />
    </li>
  );
}
