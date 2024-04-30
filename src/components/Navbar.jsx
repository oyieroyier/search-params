import { NavLink } from "react-router-dom";

const navLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "about",
  },
  {
    label: "Team",
    path: "team",
  },
];
const Navbar = () => {
  return (
    <nav className="flex gap-4 bg-blue-200 p-4">
      {navLinks.map((link) => (
        <NavLink
          className={({ isActive }) => (isActive ? "underline" : "")}
          key={link.label}
          to={link.path}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
