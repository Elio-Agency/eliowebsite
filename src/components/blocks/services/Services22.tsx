import { Fragment } from "react";
// CUSTOM ICON COMPONENT
import Bulb from "icons/solid-mono/Bulb";
import Compare from "icons/solid-mono/Compare";
import DeliveryBox from "icons/solid-mono/DeliveryBox";
// GLOBAL CUSTOM COMPONENTS
import NextLink from "components/reuseable/links/NextLink";

export default function Services22() {
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center">
          <h2 className="fs-16 text-uppercase text-muted mb-3">
            Why Choose Elio?
          </h2>
          <h3 className="display-3 mb-10 px-xl-10 px-xxl-15">
            Here are a few{" "}
            <span className="underline-3 style-2 yellow">reasons</span> why our
            customers choose Elio.
          </h3>
        </div>
      </div>

      <ul
        role="tablist"
        className="nav nav-tabs nav-tabs-bg nav-tabs-shadow-lg d-flex justify-content-between nav-justified flex-lg-row flex-column"
      >
        <li className="nav-item" role="presentation">
          <a
            role="tab"
            tabIndex={-1}
            href="#tab2-3"
            data-bs-toggle="tab"
            aria-selected="false"
            className="nav-link d-flex flex-row"
          >
            <div>
              <DeliveryBox className="icon-svg-sm solid-mono text-green me-4" />
            </div>

            <div>
              <h4 className="mb-1">Integrated Product</h4>
              <p>Software solutions built perfectly for your business needs.</p>
            </div>
          </a>
        </li>

        <li className="nav-item" role="presentation">
          <a
            role="tab"
            href="#tab2-1"
            data-bs-toggle="tab"
            aria-selected="true"
            className="nav-link d-flex flex-row active"
          >
            <div>
              <Bulb />
            </div>

            <div>
              <h4 className="mb-1">Advanced Marketing</h4>
              <p>
                More people seeing your business means you stay front of mind.
              </p>
            </div>
          </a>
        </li>

        <li className="nav-item" role="presentation">
          <a
            role="tab"
            tabIndex={-1}
            href="#tab2-2"
            data-bs-toggle="tab"
            aria-selected="false"
            className="nav-link d-flex flex-row"
          >
            <div>
              <Compare />
            </div>

            <div>
              <h4 className="mb-1">Data Led Solutions</h4>
              <p>Data spearheads our products and services.</p>
            </div>
          </a>
        </li>
      </ul>

      {/* ========== tab content ========== */}
      <div className="tab-content mt-6 mt-lg-8">
      <div className="tab-pane fade" id="tab2-3" role="tabpanel">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6">
              <figure className="rounded shadow-lg">
                <img
                  src="/img/photos/se7.jpg"
                  srcSet="/img/photos/se7@2x.jpg 2x"
                  alt=""
                />
              </figure>
            </div>

            <List title="Integrated Product" color="green" />
          </div>
        </div>
        
        <div className="tab-pane fade active show" id="tab2-1" role="tabpanel">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6">
              <figure className="rounded shadow-lg">
                <img
                  src="/img/photos/se5.jpg"
                  srcSet="/img/photos/se5@2x.jpg 2x"
                  alt=""
                />
              </figure>
            </div>

            <List title="Advanced Marketing" color="fuchsia" />
          </div>
        </div>

        <div className="tab-pane fade" id="tab2-2" role="tabpanel">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <figure className="rounded shadow-lg">
                <img
                  src="/img/photos/se6.jpg"
                  srcSet="/img/photos/se6@2x.jpg 2x"
                  alt=""
                />
              </figure>
            </div>

            <List title="Data Led Solutions" color="violet" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

type ListProps = { color: "fuchsia" | "violet" | "green"; title: string };
const List = ({ color, title }: ListProps) => {
  return (
    <div className="col-lg-6">
      <h2 className="mb-3">{title}</h2>
      <p>
        {title === "Integrated Product"
          ? "Our developers build software designed exactly to the specification that your business needs. We will go through the exploration phase with you to understand the pain points that you are facing and will design products that improve the efficiency of your business processes, including issues around reporting, client management, and more."
          : title === "Advanced Marketing"
          ? "Through our organic social media content for our clients, we have garnered over 10M impressions and over $100,000 worth of advertising revenue from organic content alone. Some businesses may not be the most entertaining, however that doesn’t mean that the content has to be dull. Through our in house led creatives we have generated more business for our clients."
          : title === "Data Led Solutions"
          ? "Our test and learn approach means that we are always improving marketing solutions for our customers, generating more leads, sales, and impressions for you to boost your business needs. We also provide data analytics services so that you can unlock insights that allow you to focus where you need to."
          : "This is the default text."}
      </p>

      <ul className={`icon-list bullet-bg bullet-soft-${color}`}>
        {title === "Integrated Product" ? (
          <>
            <li>
              <i className="uil uil-check" /> Consult on how to optimize your
              business with technology.
            </li>
            <li>
              <i className="uil uil-check" /> Build bespoke software to address
              your needs.
            </li>
            <li>
              <i className="uil uil-check" /> Provide support and training.
            </li>
          </>
        ) : title === "Advanced Marketing" ? (
          <>
            <li>
              <i className="uil uil-check" /> Top tier creative solutions.
            </li>
            <li>
              <i className="uil uil-check" /> Creative strategy and content
              planning.
            </li>
            <li>
              <i className="uil uil-check" /> Our content creators will come to
              your premises to shoot content.
            </li>
          </>
        ) : (
          <>
            <li>
              <i className="uil uil-check" /> In house analytics solutions.
            </li>
            <li>
              <i className="uil uil-check" /> Marketing A/B tests.
            </li>
            <li>
              <i className="uil uil-check" /> Data driven lead generation and
              performance marketing tactics.
            </li>
          </>
        )}
      </ul>

      <NextLink
        title="Get In Touch"
        href="contact"
        className={`btn btn-${color} mt-2`}
      />
    </div>
  );
};
