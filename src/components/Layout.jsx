import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <h1>header</h1>
        </nav>
      </header>

      <Outlet />

      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
}
