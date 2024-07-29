import { Navigate, Outlet } from "react-router-dom";

function LayoutAdmin() {
  const token = localStorage.getItem("token");
  return (
    <>
      {token ? (
        <>
          <p>Sidebar</p>
          <Outlet />
        </>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
}

export default LayoutAdmin;
