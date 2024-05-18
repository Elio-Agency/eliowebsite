import NextLink from "components/reuseable/links/NextLink";

// =======================================================
interface ProjectDetailsContentProps {
  title: string;
  titleClass?: string;
  contentRowClass?: string;
}
// =======================================================

export default function ProjectDetailsContent({
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
              Partnered with multiple tattoo artists to enhance their online
              presence and drive customer engagement and lead generation through
              innovative marketing strategies.
            </p>
            <h2>Challenge: </h2>
            <p>
              Tattoo artists faced stiff competition and needed to differentiate
              themselves in a saturated market.
            </p>
            <h2>Strategy:</h2>
            <ul>
              <li>
                <strong>Creative Collaboration:</strong> Worked closely with
                artists to create visually appealing ad creatives that resonate
                with their unique styles.
              </li>
              <li>
                <strong>Paid Advertising:</strong> Leveraged paid advertising
                platforms to target specific demographics interested in tattoos.
              </li>
              <li>
                <strong>Email Marketing:</strong> Integrated email marketing to
                nurture leads and convert interest into bookings.
              </li>
            </ul>
            <h2>Results:</h2>
            <ul>
              <li>
                <strong>Revenue Increase:</strong> Achieved an average revenue
                increase of 30% for our clients.
              </li>
              <li>
                <strong>Return on Ad Spend (ROAS):</strong> Maintained an
                impressive ROAS of 2, ensuring high efficiency in advertising
                spend.
              </li>
            </ul>
            <h2>Client Testimonial:</h2>
            <p>
              “Our collaboration has not only amplified my visibility but also
              substantially increased my bookings, directly impacting my revenue
              thanks to the expertly crafted marketing campaigns.”
            </p>
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
