const Header = () => {
  return (
    <header className="py-6 shadow-lg">
      <nav className="flex justify-around items-center flex-col gap-4 md:flex-row">
        <h2 className="text-3xl font-bold">Products Hub</h2>
        <ul className="flex gap-6 text-xl font-medium">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/product">Products</a>
          </li>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
