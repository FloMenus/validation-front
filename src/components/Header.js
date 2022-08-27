import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div class="navbar bg-gray-700">
  <div class="flex-1">
    <Link to="/" class="navbar-brand btn btn-ghost normal-case text-xl">
        Home
    </Link>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
      <li>
        <Link to="/creation" class="btn btn-ghost normal-case text-xl ">
            Add
        </Link>
        </li>
    </ul>
  </div>
</div>
    </>
  );
}

export default Header;
