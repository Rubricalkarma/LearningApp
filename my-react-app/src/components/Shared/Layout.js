import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import NavbarWrapper from "./NavbarWrapper";
export default function Layout() {
  return (
    <>
      <NavbarWrapper />
      <Outlet />
    </>
  );
}
