import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import ScrollCue from "./scroll-cue";
import ThemeProvider from "theme/ThemeProvider";

import PageProgress from "components/common/PageProgress";

// animate css
import "animate.css";
// import swiper css
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
// video player css
import "plyr-react/plyr.css";
// glightbox css
import "glightbox/dist/css/glightbox.css";
// custom scrollcue css
import "plugins/scrollcue/scrollCue.css";
// Bootstrap and custom scss
import "assets/scss/style.scss";
import { GoogleTagManager } from "@next/third-parties/google";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elio Agency",
  description: "Software Development for Service BAsed Businesses",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <ScrollCue>
          <ThemeProvider>{children}</ThemeProvider>
        </ScrollCue>

        <PageProgress />
        <GoogleTagManager gtmId="GTM-T6XGBKW"/>
      </body>
    </html>
  );
}
