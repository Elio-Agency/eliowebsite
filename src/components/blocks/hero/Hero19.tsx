"use client";

import ContactModal from "components/common/ContactModal";
import { slideInDownAnimate } from "utils/animation";

export default function Hero19() {
  return (
    <section
      className="wrapper image-wrapper bg-image bg-overlay bg-overlay-500"
      style={{ backgroundImage: "url(/img/photos/construction.png)" }}
    >
      <div className="container pt-17 pt-md-18 pb-md-10 text-center">
        <div className="row">
          <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto">
            <h1
              className="display-1 text-white fs-60 mb-4 px-md-15 px-lg-0"
              style={slideInDownAnimate("0ms")}
            >
              Technological{" "}
              <span className="underline-3 style-2 yellow">solutions</span> for
              traditional businesses.
            </h1>

            <p
              className="lead fs-24 text-white lh-sm mb-7 mx-md-13 mx-lg-10"
              style={slideInDownAnimate("300ms")}
            >
              We build software and provide technical solutions for traditional
              non-digital businesses.
            </p>

            <div style={slideInDownAnimate("600ms")}>
              <button
                type="button"
                className="btn btn-white rounded mb-10 mb-xxl-5"
                data-bs-toggle="modal"
                data-bs-target="#contactModal"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      <ContactModal email="contact@elio.agency" phone="+44 7557 910 006" />
    </section>
  );
}
