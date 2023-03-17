function Footer() {
    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '50px',
        backgroundColor: 'black !important',
        background: '#D3D3D3'
    };

    const year = new Date().getFullYear();

    return (
        <div className="mt-auto" style={style}>
        <h4>© {year}<strong>{`   <Grabber Rewired />   👌`}</strong> </h4>
        
        </div>
    );
  };
  
  export default Footer;