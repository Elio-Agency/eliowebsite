import NextLink from "components/reuseable/links/NextLink";
import { ServiceCard5 } from "components/reuseable/service-cards";

export default function Services10() {
  return (
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
        <h2 className="display-4 mb-3">About Us</h2>

        <p className="lead fs-lg lh-sm">
          We build bespoke software for physical service businesses.
        </p>

        <p>
          We have worked with a variety of businesses to help them navigate the
          digital landscape and make software work for them.
        </p>
        <ul>
          <li>Construction Businesses</li>
          <li>Property Development</li>
          <li>Logistics Businesses</li>
          <li>Plumbing Companies</li>
          <li>Leak Detection Services</li>
        </ul>

        <NextLink
          title="Get In Touch"
          href="/contact"
          className="btn btn-primary rounded-pill mt-3"
        />
      </div>
    </div>
  );
}
