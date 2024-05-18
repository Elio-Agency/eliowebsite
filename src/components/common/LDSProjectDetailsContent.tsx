import NextLink from "components/reuseable/links/NextLink";

// =======================================================
interface ProjectDetailsContentProps {
  title: string;
  titleClass?: string;
  contentRowClass?: string;
}
// =======================================================

export function LDSProjectDetailsContent({
  title,
  contentRowClass = "row gx-0",
  titleClass = "display-6 mb-4",
}: ProjectDetailsContentProps) {
  return (
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <h2 className={titleClass}>{title}</h2>

        <div className={contentRowClass}>
          <div className="col-md-9 text-justify">
            <h2>Background:</h2>
            <p>
              LDS, a leading plumbing services company, engaged us to enhance
              their online presence and leverage social media to attract new
              clients and employees.
            </p>
            <h2>Challenge: </h2>
            <p>
              LDS's social media accounts were underperforming, with low
              engagement rates and minimal impact on business growth.
            </p>

            <h2>Strategy:</h2>
            <ul>
              <li>
                <strong>Content Revamp:</strong> We overhauled the content
                strategy to focus on engaging, educational, and promotional posts
                tailored to the LDS target audience.
              </li>
              <li>
                <strong>Advertising Campaigns:</strong> Implemented targeted
                advertising campaigns designed to maximize reach and attract
                potential customers.
              </li>
              <li>
                <strong>Employee Spotlight Features:</strong> Introduced regular
                posts highlighting employee stories to humanize the brand and
                attract quality staff.
              </li>
            </ul>

            <h2>Results:</h2>
            <ul>
              <li>
                <strong>Growth in Followers:</strong> Achieved a XX% increase in
                account followers, significantly enhancing brand visibility.
              </li>
              <li>
                <strong>Impressions & Reach:</strong> Garnered a total of XXX
                impressions and reached XX people, creating an advertising value
                equivalent to $XX.
              </li>
              <li>
                <strong>Client Acquisition:</strong> New client acquisitions
                directly attributed to social media campaigns.
              </li>
              <li>
                <strong>Recruitment Impact:</strong> Positive feedback from new
                employees about the brands appeal as a workplace.
              </li>
              </ul>

            <h2>Client Testimonial:</h2>
            <p>
              “We've seen a remarkable transformation in our social media outreach
              and are thrilled with the influx of new clients and enthusiastic team
              members, all thanks to the strategic insight from our partners.”</p>
          </div>

          <div className="col-md-2 ms-auto">
            <ul className="list-unstyled">
              <li>
                <h5 className="mb-1">Industry</h5>
                <p>Plumbing</p>
              </li>

              <li>
                <h5 className="mb-1">Client Name</h5>
                <p>Leak Detection Solutions</p>
              </li>
            </ul>

            <NextLink title="See Project" href="#" className="more hover" />
          </div>
        </div>
      </div>
    </div>
  );
}
