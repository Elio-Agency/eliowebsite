// GLOBAL CUSTOM COMPONENTS
import SocialLinks from "components/reuseable/SocialLinks";
import NextLink from "components/reuseable/links/NextLink";
// CUSTOM DATA
import footerNav from "data/footer";

export default function Footer11() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="widget text-center">
              <img
                className="mb-4 mx-auto"
                src="/img/elio-logo-small.png"
                srcSet="/img/elio-logo-small.png 2x"
                alt=""
              />

              <p className="mb-2">
                © 2022 Elio. <br className="d-none d-lg-block" />
                All rights reserved.
              </p>
              <address className="text-center mx-auto">
                London, United Kingdom
              </address>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
