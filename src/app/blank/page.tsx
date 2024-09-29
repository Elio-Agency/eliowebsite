import { Fragment } from "react";
import Navbar from "components/blocks/navbar/navbar-3";

export default function Blank() {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper mb-1">
        <Navbar logoAlt="logo-dark" stickyBox={false} />
      </header>

      <main className="content-wrapper">
        <div className="container">
          <h1>This is blank page</h1>
        </div>
      </main>
    </Fragment>
  );
}
