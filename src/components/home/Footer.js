function Footer() {
    const style = {
        position: 'fixed',
        bottom: '0',
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
        <div style={style}>
        <h4>© {year}<strong>{`   <Grabber Rewired />   👌`}</strong> </h4>
        
        </div>
    );
  };
  
  export default Footer;