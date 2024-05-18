import NextLink from "components/reuseable/links/NextLink";

// =======================================================
interface ProjectDetailsContentProps {
  title: string;
  titleClass?: string;
  contentRowClass?: string;
}
// =======================================================

export function EZoneProjectDetailsContent({
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
              eZone Logistics, an international logistics company headquartered
              in the US, tasked us with being their in-house social media and
              creative team to boost their online engagement and customer
              acquisition.
            </p>
            <h2>Challenge: </h2>
            <p>
              Despite being a major player in the logistics industry, eZone was
              not fully utilizing social media to engage with potential
              customers and drive service sign-ups.
            </p>

            <h2>Strategy:</h2>
            <ul>
              <li>
                <strong>Follower Engagement:</strong> Implemented strategies to
                increase follower interactions and community building.
              </li>
              <li>
                <strong>Content Diversification:</strong> Enhanced content
                variety, including behind-the-scenes at logistics operations,
                customer testimonials, and industry insights.
              </li>
              <li>
                <strong>Conversion-Focused Campaigns:</strong> Launched targeted
                campaigns focused on increasing service sign-ups through
                strategic call-to-action placements.
              </li>
            </ul>
            <h2>Results:</h2>
            <ul>
              <li>
                <strong>Follower Increase:</strong> Follower count increased by
                XX.
              </li>
              <li>
                <strong>Sign-Up Growth:</strong> 200% increase in service
                sign-ups directly through social media channels.
              </li>
            </ul>
            <h2>Client Testimonial:</h2>
            <p>
              “The strategic changes to our social media and creative endeavors
              have not only enhanced our brand’s visibility but have directly
              contributed to a sharp increase in customer engagement and
              conversions.”
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
