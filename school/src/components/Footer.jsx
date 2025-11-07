const Footer = () => {
  return (
    <footer
      style={{
        padding: "100px 60px",
        background: "#03011c",
        display: "flex",
        gap: 48,
      }}
    >
      <div style={{ width: "100%" }}>
        <h2 style={{ color: "#f5f5f5", fontWeight: "500" }}>Codeschool</h2>
        <p style={{ color: "white" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          dolorem molestias enim suscipit at aspernatur dicta doloremque ratione
          optio cumque.
        </p>
      </div>
      <div style={{ width: "100%" }}>
        <h2 style={{ color: "#f5f5f5", fontWeight: "500" }}>Useful links</h2>
        <ul
          style={{
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <li>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              Home
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              Teachears
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              Holidays
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              Contact
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              Talk to us
            </a>
          </li>
        </ul>
      </div>
      <div style={{ width: "100%" }}>
        <h2 style={{ color: "#f5f5f5", fontWeight: "500" }}>Social links</h2>
        <ul
          style={{
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <li>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              Youtube
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              Facebook
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              Instagram
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              Linkdin
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              Twitter
            </a>
          </li>
        </ul>
      </div>

      <div style={{ width: "100%" }}>
        <h2 style={{ color: "#f5f5f5", fontWeight: "500" }}>Enquiry</h2>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <input
            required
            name="fullname"
            placeholder="Fullname"
            style={{ border: "none", padding: 12, borderRadius: 4 }}
          />
          <input
            required
            name="email"
            placeholder="example@gmail.com"
            style={{ border: "none", padding: 12, borderRadius: 4 }}
          />
          <textarea
            required
            name="message"
            placeholder="Message"
            style={{ border: "none", padding: 12, borderRadius: 4 }}
          />
          <button
            style={{
              width: "fit-content",
              border: "none",
              background: "orange",
              color: "white",
              borderRadius: 4,
              padding: "12px 24px ",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
