import Root from "../pages/client/Root";
import Home from "../pages/client/Home";
import Contact from "../pages/client/Contact";
import Favorites from "../pages/client/Favorites";
import Cart from "../pages/client/Cart";
import AdminRoot from "../pages/admin/AdminRoot";
import Dashboard from "../pages/admin/Dashboard";
import Products from "../pages/admin/Products";

export const ROUTES = [
  {
    path: "",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/admin/products",
        element: <Products />,
      },
    ],
  },
];
