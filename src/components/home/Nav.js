import grabberLogo from '../../assets/Images/grabberLogo.jpg'

function Nav() {
    return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
        <img src={grabberLogo} alt="Grabber rewired logo" width="150" height="10" />
    </a>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" href="./" >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
</nav>
)
}

export default Nav;