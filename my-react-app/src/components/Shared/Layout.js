import { Outlet } from "react-router-dom";
import NavbarWrapper from "./NavbarWrapper";
export default function Layout() {
  return (
    <>
      <NavbarWrapper />
      <Outlet />
    </>
  );
}
