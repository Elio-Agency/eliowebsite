import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar3 from "components/blocks/navbar/navbar-3";
import { Hero1, Hero13, Hero19, Hero3, Hero31 } from "components/blocks/hero";
import { Facts13 } from "components/blocks/facts";
import { About20 } from "components/blocks/about";
import { Footer11 } from "components/blocks/footer";
import { CTA8 } from "components/blocks/call-to-action";
import { Portfolio10 } from "components/blocks/portfolio";
import { Testimonial16 } from "components/blocks/testimonial";
import {
  Services10,
  Services21,
  Services22,
  Services8,
} from "components/blocks/services";
import { TestimonialCard3 } from "components/reuseable/testimonial-cards";
import data from "data/career-page-1";

export default function Demo19() {
  return (
    <Fragment>
      {/* ========== header ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar3 logoAlt="logo-dark" stickyBox={false} />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero19 />

        <section className="wrapper bg-light">
          <div className="container">
            <section className="wrapper bg-light">
              <div className="container pb-10 pt-8 pt-md-10 pb-md-12">
                {/* ========== latest project section ========== */}
                <Services10 />

                <Services8 />

                {/* ========== what make us section ========== */}
                {/* <About20 /> */}
              </div>
            </section>
            {/* ========== reviews section ========== */}
            <section className="wrapper mt-2">
              <div className="container pb-md-12">
                <div className="row position-relative">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center">
                    <h1 className="fs-15 text-uppercase text-primary mb-3">
                      Reviews
                    </h1>
                    <h3 className="display-4 mb-10 px-xl-10 px-xxl-15">
                      Dont take our word for it. See what our customers say
                      about us.
                    </h3>
                  </div>
                </div>

                <div className="grid">
                  <div className="row isotope gy-6">
                    {data.testimonialList.map((item) => (
                      <div className="item col-md-6 col-xl-4" key={item.id}>
                        <TestimonialCard3 {...item} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* ========== call to action section ========== */}
        <CTA8 />
      </main>

      {/* ========== footer section ========== */}
      <Footer11 />
    </Fragment>
  );
}
