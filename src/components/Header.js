import logo from '../images/logo.svg';

function Header () {
  return (
    <header className="header">
    <img
      className="logo header__logo"
      src={logo}
      alt="Лого"
    />
  </header>
  );
}

export default Header;