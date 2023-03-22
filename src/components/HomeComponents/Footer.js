function Footer() {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "60px",
  };

  const year = new Date().getFullYear();

  return (
    <div className="fixed-bottom footer-div" style={style}>
      <h4 className="d-flex align-items-center">
        © {year}
        <strong>{`   <Grabber Rewired />   👌`}</strong>{" "}
      </h4>
    </div>
  );
}

export default Footer;
