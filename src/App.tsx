import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Admin from "./pages/admin";
import LayoutAdmin from "./layouts/LayoutAdmin";
import Dashboard from "./pages/admin/Dashboard";
import AdminProductList from "./pages/admin/product/List";
import LayoutClient from "./layouts/LayoutClient";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminAddProduct from "./pages/admin/product/Add";
import AdminEditProduct from "./pages/admin/product/Edit";

const routeConfig = [
  {
    path: "",
    element: <LayoutClient />,
    children: [
      { path: "", element: <Homepage /> },
      { path: "/product/:id", element: <ProductDetail /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
    ],
  },

  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      {
        path: "",
        element: <Admin />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "product/list",
        element: <AdminProductList />,
      },
      {
        path: "product/add",
        element: <AdminAddProduct />,
      },
      {
        path: "product/edit/:id",
        element: <AdminEditProduct />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
];

function App() {
  const routes = useRoutes(routeConfig);
  return (
    <div>
      <ToastContainer />
      {routes}
    </div>
  );
}

export default App;
