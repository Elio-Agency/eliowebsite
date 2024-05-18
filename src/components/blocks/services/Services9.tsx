import NextLink from "components/reuseable/links/NextLink";
import { ServiceCard4 } from "components/reuseable/service-cards";
// CUSTOM DATA
import { serviceList7 } from "data/service";

export default function Services9() {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-lg-22 mb-xl-24 align-items-center">
      <div className="col-lg-7 order-lg-2">
        <div className="row gx-md-5 gy-5">
          {serviceList7.map(({ id, Icon, color, ...item }) => (
            <ServiceCard4
              key={id}
              Icon={<Icon className={`icon-svg-md text-${color} mb-3`} />}
              {...item}
            />
          ))}
        </div>
      </div>

      <div className="col-lg-5">
        <h2 className="fs-15 text-uppercase text-muted mb-3">
          Why our clients choose us?
        </h2>
        <h3 className="display-4 mb-5">
          The service we offer is specifically designed to meet your needs.
        </h3>
        <p>
          Our team of marketers will be able to integrate into your operations
          seamlessly, providing you with the best possible service.
        </p>
        <NextLink
          title="Get In Touch"
          href="#"
          className="btn btn-navy rounded-pill mt-3"
        />
      </div>
    </div>
  );
}
