function Footer() {
    const style = {
        textAlign: 'center',
        width: '100vw',
        backgroundColor: 'black !important',
        position: 'absolute',
        bottom: '0px'
    };

    const year = new Date().getFullYear();
    console.log(year)
    return (
        <div style={style}>
        <h4>© {year}<strong>{`   <Grabber Rewired />   👌`}</strong> </h4>
        
        </div>
    );
  };
  
  export default Footer;