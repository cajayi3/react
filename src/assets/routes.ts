import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import About from "../pages/About/About";
import Sign from "../pages/Sign/Sign";
import Login from "../pages/Login/Login";

interface RouteType {
    path: string,
    component: (props: any) => JSX.Element,
    name: string
    protected: Boolean
}

const routes: RouteType[] = [
    { 
      path: "",
      component: Home,
      name: "Home Screen",
      protected: false
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
      protected: true
    },
    {
      path: "/about",
      component: About,
      name: "About",
      protected: true
    },
    {
        path: "/Login",
        component: Login,
        name: "Login",
        protected: true
    },
    {
      path: "/Sign",
      component: Sign,
      name: "Sign",
      protected: true
    }
  ];

export default routes