import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import About from "../pages/About/About";
import Sign from "../pages/Sign/Sign";
import Login from "../pages/Login/Login";

interface RouteType {
    path: string,
    component: React.ComponentType<any>,
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
      path: "/Dashboard",
      component: Dashboard,
      name: "Dashboard",
      protected: true
    },
    {
      path: "/About",
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