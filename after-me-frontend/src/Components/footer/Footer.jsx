import React from "react";
import style from "./Footer.module.css";
import Social from "../social/Social";

const Footer = () => {
  return (
    <div className={`container`}>
      <footer
        className={`d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top ${style.footer}`}
      >
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg
              className="bi"
              width="30"
              height="24"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          <span className="mb-3 mb-md-0 text-muted">© 2024 Company, Inc</span>
        </div>
        <Social />
      </footer>
    </div>
  );
};

export default Footer;
