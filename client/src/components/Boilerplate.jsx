import { Outlet } from "react-router-dom";

// components
import Navbar from "../screen/Navbar";
import Footer from "../screen/Footer";

export default function Boilerplate() {
  return (
    <section className="boilerplate">
      <header className="my-4">

        <Navbar />
      </header>

      <Outlet />
      <Footer />
    </section>
  );
}
