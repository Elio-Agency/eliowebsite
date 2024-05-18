// GLOBAL CUSTOM COMPONENTS
import ListItemLink from "components/reuseable/links/ListItemLink";
import DropdownToggleLink from "components/reuseable/links/DropdownToggleLink";
// LOCAL CUSTOM COMPONENTS
import renderLinks from "./render-links";
// CUSTOM DATA
import { services } from "data/navigation";

export default function ServicesNavItem() {
  return (
    <li className="nav-item dropdown">
      <DropdownToggleLink
        title="Services"
        className="nav-link dropdown-toggle"
      />
      <ul className="dropdown-menu">
        {services.map(({ id, title }) => (
          <ListItemLink
            key={id}
            liClassName="nav-item"
            linkClassName="dropdown-item"
            title={title}
            href={`/${title.toLowerCase()}`}
            textColor="text-black" // Pass desired Tailwind text color class
          />
        ))}
      </ul>
    </li>
  );
}
