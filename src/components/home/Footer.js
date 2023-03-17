function Footer() {
    const style = {
        position: 'fixed',
        bottom: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '60px',
        background: "black",
    };

    const year = new Date().getFullYear();

    return (
        <div className="border border-success " style={style}>
        <h4 className="d-flex align-items-center">© {year}<strong>{`   <Grabber Rewired />   👌`}</strong> </h4>
        
        </div>
    );
  };
  
  export default Footer;