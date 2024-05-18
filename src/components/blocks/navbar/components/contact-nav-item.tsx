// GLOBAL CUSTOM COMPONENTS
import DropdownToggleLink from "components/reuseable/links/DropdownToggleLink";
// LOCAL CUSTOM COMPONENTS
import renderLinks from "./render-links";
// CUSTOM DATA
import { projectsNavigation } from "data/navigation";
import NextLink from "components/reuseable/links/NextLink";


export default function ContactNavItem() {
  return (
<NextLink href="/contact" title="Contact" className="nav-item nav-link dropdown-notoggle" />    
  );
}
