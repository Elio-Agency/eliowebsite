import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Facts4 } from "components/blocks/facts";
import { Process4 } from "components/blocks/process";
import { Services9 } from "components/blocks/services";
import { Services1 } from "components/blocks/services";
import ListColumn from "components/reuseable/ListColumn";

// CUSTOM DATA
const list = [
  [
    "Facebook Ads",
    "Instagram Ads",
    "LinkedIn Ads",
    "TikTok Ads",
    "Snapchat Ads",
  ],
  [
    "Google Search Ads",
    "Google Shopping Ads",
  ],
];

export default function ServicesTwo() {
  return (
    <Fragment>
      {/* ========== page title section ========== */}
      <section
        className="wrapper image-wrapper bg-image bg-overlay text-white"
        style={{ backgroundImage: "url(/img/photos/bg1.jpg)" }}
      >
        <div className="container pt-19 pt-md-21 pb-18 pb-md-20 text-center">
          <div className="row">
            <div className="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto">
              <h1 className="display-1 text-white mb-3">Marketing</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Our Marketing Solutions span social media and data driven
                advertising to ensure that you are seeing results and
                improvement.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Services1 />;{/* ========== what we do section ========== */}
      <section className="wrapper bg-light">
        <div className="container pt-14 pb-12 pt-md-16 pb-md-14">
          <Services9 />
        </div>
      </section>
      {/* ========== our process section ========== */}
      <Process4 />
      {/* ========== about section ========== */}
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-16">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-7 order-lg-2">
              <figure>
                <img
                  alt="illustration"
                  className="w-auto"
                  src="/img/illustrations/i7.png"
                  srcSet="/img/illustrations/i7@2x.png 2x"
                />
              </figure>
            </div>

            <div className="col-lg-5">
              <h3 className="display-4 mb-5">
                Putting advertising channels to work.
              </h3>

              <p className="mb-6">
                We have a wealth of experience across the major digital
                advertising channels, and with our data driven approach you can
                be sure that yur advertising is in good hands.
              </p>

              <ListColumn list={list} />
            </div>
          </div>
        </div>
      </section>
      {/* ========== facts section ========== */}
      <Facts4 />
    </Fragment>
  );
}
