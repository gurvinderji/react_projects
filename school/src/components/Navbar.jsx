import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        background: "white",
        display: "flex",
        justifyContent: "space-between",
        padding: "0 48px",
        boxShadow: " 0 8px  8px 0 rgba(0,0,0,.1)",
      }}
    >
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <img src="./images/logo.jpeg" width="60" />
        <h1>Codeschool</h1>
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex" }}>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px 24px",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#323232",
              fontSize: 17,
            }}
          >
            Home
          </Link>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px 24px",
          }}
        >
          <Link
            to="/teachers"
            style={{
              textDecoration: "none",
              color: "#323232",
              fontSize: 17,
            }}
          >
            Teachers
          </Link>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px 24px",
          }}
        >
          <Link
            to="holidays"
            style={{
              textDecoration: "none",
              color: "#323232",
              fontSize: 17,
            }}
          >
            Holidays
          </Link>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px 24px",
          }}
        >
          <Link
            to="/contact-us"
            style={{
              textDecoration: "none",
              color: "#323232",
              fontSize: 17,
            }}
          >
            Contact
          </Link>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px 24px",
          }}
        >
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#323232",
              fontSize: 17,
              background: "dodgerblue",
              padding: "16px 48px",
              borderRadius: 4,
            }}
          >
            Talk to us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
