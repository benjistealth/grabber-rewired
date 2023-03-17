function Footer() {
    const style = {
        // display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        width: '100vw',
        // height: '1rem',
        // backgroundColor: 'blue !important',
        background: "black",
    };

    const year = new Date().getFullYear();

    return (
        <div className=" footer square border border-success d-flex align-items-center" style={style}>
        <h4 className="d-flex align-items-center">© {year}<strong>{`   <Grabber Rewired />   👌`}</strong> </h4>
        
        </div>
    );
  };
  
  export default Footer;