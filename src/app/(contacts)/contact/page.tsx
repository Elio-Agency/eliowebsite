import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Footer8 } from "components/blocks/footer";
import { Contact2 } from "components/blocks/contact";
import Navbar from "components/blocks/navbar/navbar-1";
import ContactForm from "components/common/ContactForm";
import NextLink from "components/reuseable/links/NextLink";

export default function ContactThree() {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          language
          stickyBox={false}
          logoAlt="elio-logo-small-white"
          navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark"
        />
      </header>

      <main className="content-wrapper">
        {/* ========== page title section ========== */}

        <section
          className="wrapper bg-dark text-white mb-8"
          style={{ backgroundImage: "url(/img/photos/bg2.jpg)" }}
        >
          <div className="container pt-18 pt-md-20 pb-8 pb-md-8 text-center">
            <div className="row">
              <div className="col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xxl-5 mx-auto">
                <h1 className="display-1 text-white mb-3">Get in Touch</h1>
                <p className="lead px-xl-10 px-xxl-10">
                  Reach out to us from our contact form and we will get back to
                  you shortly.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="wrapper bg-light">
          <div className="container pb-14 pb-md-160 flex items-center justify-center">
            {/* ========== newsletter section ========== */}

            <div className="flex-row items-center justify-center">
              <div className="flex-row items-center justify-center col-xl-10 mx-auto">
                <div className="flex-col justify-center">
                  {/* ========== contact form section ========== */}
                  <div>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
}
