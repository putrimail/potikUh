import { Link } from "react-router-dom";

function Option({ logo, text, link }) {
  const isExternal = link.startsWith("http");

  const content = (
    <div
      className="btn-group w-75 mt-3"
      style={{ border: "1px solid #686868", opacity: "0.8" }}
      role="group"
      aria-label="Basic example"
    >
      <button type="button" className="btn">
        <span className="fs-3">{logo}</span>
      </button>
      <button type="button" className="btn w-100">
        {text}
      </button>
    </div>
  );

  return isExternal ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-decoration-none text-dark"
    >
      {content}
    </a>
  ) : (
    <Link to={link} className="text-decoration-none text-dark">
      {content}
    </Link>
  );
}

export default Option;
