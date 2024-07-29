import { Link, Outlet } from "react-router-dom";

function LayoutClient() {
  return (
    <>
      <Link to={"/admin/product/list"}>Admin</Link>
      <Outlet />
      <p>Footer</p>
    </>
  );
}

export default LayoutClient;
