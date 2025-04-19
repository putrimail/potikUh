function Option({ logo, text, link }) {
  return (
    <a
      href={link}
      target="new_blank"
      className="text-decoration-none text-dark"
    >
      <div
        className="btn-group w-75 mt-3"
        style={{ border: "1px solid #686868", opacity: "0.8" }}
        role="group"
        aria-label="Basic example"
      >
        <button type="button" className="btn  ">
          <span className="fs-3">{logo}</span>
        </button>
        <button type="button" className="btn  w-100">
          {text}
        </button>
      </div>
    </a>
  );
}

export default Option;
