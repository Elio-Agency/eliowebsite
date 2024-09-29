"use client";

import ContactModal from "components/common/ContactModal";
import NextLink from "components/reuseable/links/NextLink";
import { ServiceCard5 } from "components/reuseable/service-cards";
import { slideInDownAnimate } from "utils/animation";

export default function Services10() {
  return (
    <section>
      <div className="row gx-lg-0 gy-10 mb-10 mb-md-12 align-items-center">
        <div className="col-lg-6">
          <div className="row g-6 text-center">
            <div className="col-md-6">
              <div className="row">
                <div className="col-lg-12">
                  <figure className="rounded mb-6">
                    <img
                      src="/img/photos/builder1.png"
                      srcSet="/img/photos/builder1@2x.png 2x"
                      alt=""
                    />
                  </figure>
                </div>

                <div className="col-lg-12">
                  <figure className="rounded mb-6">
                    <img
                      src="/img/photos/plumber1.png"
                      srcSet="/img/photos/plumber1@2x.png 2x"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="row">
                <div className="col-lg-12">
                  <figure className="rounded mb-6">
                    <img
                      src="/img/photos/logistics1.png"
                      srcSet="/img/photos/logistics1@2x.png 2x"
                      alt=""
                    />
                  </figure>
                </div>

                <div className="col-lg-12">
                  <figure className="rounded mb-6">
                    <img
                      src="/img/photos/solar-panel1.png"
                      srcSet="/img/photos/solar-panel1@2x.png 2x"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-5 offset-lg-1">
          <h2 className="display-4 mb-3">
            We build bespoke software for physical service businesses.
          </h2>

          <p>
            We have worked with a variety of businesses to help them navigate
            the digital landscape and make software work for them.
          </p>
          <ul>
            <li>Construction Businesses</li>
            <li>Property Development</li>
            <li>Logistics Businesses</li>
            <li>Plumbing Companies</li>
            <li>Leak Detection Services</li>
          </ul>

          <div style={slideInDownAnimate("600ms")}>
            <button
              type="button"
              className="btn btn-primary rounded-pill mt-3"
              data-bs-toggle="modal"
              data-bs-target="#contactModal"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      <ContactModal email="contact@elio.agency" phone="+44 7557 910 006" />
    </section>
  );
}
