import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <h1>header</h1>
        </nav>
      </header>

      {/*  defines what is loaded as content of the pages but the header and nav stays the same */}
      <Outlet />

      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
}
