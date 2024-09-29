"use client";

import ContactModal from "components/common/ContactModal";

export default function CTA8() {
  return (
    <section>
      <div className="container">
        <div
          className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-300 mb-14"
          style={{ backgroundImage: "url(/img/photos/bg16.png)" }}
        >
          <div className="card-body p-10 p-xl-12">
            <div className="row text-center">
              <div className="col-xl-11 col-xxl-9 mx-auto">
                <h2 className="fs-16 text-uppercase text-white mb-3">
                  Let's get started
                </h2>
                <h3 className="display-3 mb-8 px-lg-8 text-white">
                  We are{" "}
                  <span className="underline-3 style-2 yellow">trusted</span> by
                  over 100+ clients. Join them now and make software work for
                  you.
                </h3>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <div>
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
      </div>
      <ContactModal email="contact@elio.agency" phone="+44 7557 910 006" />
    </section>
  );
}
