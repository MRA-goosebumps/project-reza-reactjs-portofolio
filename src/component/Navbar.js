import { React, useState, useEffect } from "react";

function Navbar() {
  // active pages
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    const pathname = window.location.pathname;
    setActiveItem(pathname === "/" ? "Home" : pathname.substring(1));
  }, []);

  return (
    <>
      <div className="collapse navbar-collapse custom-navmenu" id="main-navbar">
        <div className="container py-2 py-md-5">
          <div className="row align-items-start">
            <div className="col-md-2">
              <ul className="custom-menu">
                <li className={activeItem === "Home" ? "active" : ""}>
                  <a href="/" onClick={() => handleItemClick("Home")}>
                    Home
                  </a>
                </li>
                <li className={activeItem === "AboutMe" ? "active" : ""}>
                  <a href="/AboutMe" onClick={() => handleItemClick("AboutMe")}>
                    About Me
                  </a>
                </li>
                <li className={activeItem === "Services" ? "active" : ""}>
                  <a
                    href="/services"
                    onClick={() => handleItemClick("Services")}
                  >
                    Services
                  </a>
                </li>
                <li className={activeItem === "Works" ? "active" : ""}>
                  <a href="/works" onClick={() => handleItemClick("Works")}>
                    Works
                  </a>
                </li>
                <li className={activeItem === "Contact" ? "active" : ""}>
                  <a href="/Contact" onClick={() => handleItemClick("Contact")}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 d-none d-md-block  mr-auto">
              <div className="tweet d-flex">
                <span className="bi bi-twitter text-white mt-2 mr-3" />
                <div>
                  <p>
                    <em>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam necessitatibus incidunt ut officiis explicabo
                      inventore. <br /> <a href="/">t.co/v82jsk</a>
                    </em>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-none d-md-block">
              <h3>Hire Me</h3>
              <p>
                Hii There!!, My Name Is Muhammad Reza Anggawirya, Nice To Meet
                you all.
                <br /> muhammadalireza127@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-light custom-navbar">
        <div className="container">
          <a className="navbar-brand" href="/">
            MyPortfolio.
          </a>
          <a
            href="/"
            className="burger"
            data-bs-toggle="collapse"
            data-bs-target="#main-navbar"
          >
            <span />
          </a>
        </div>
      </nav>
      <main id="main"></main>
    </>
  );
}

export default Navbar;
