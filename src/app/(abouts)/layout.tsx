"use client";

import { Fragment, PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
// GLOBAL CUSTOM COMPONENTS
import { Footer8 } from "components/blocks/footer";
import Navbar from "components/blocks/navbar/navbar-3";
import NextLink from "components/reuseable/links/NextLink";

export default function AboutLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header
        className={clsx({
          wrapper: true,
          "bg-gray": pathname === "/about-1",
          "bg-soft-primary": pathname === "/about-2"
        })}>
        <Navbar logoAlt="logo-dark" stickyBox={false} />
      </header>

      <main className="content-wrapper">{children}</main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
}
