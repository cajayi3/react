import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Sign from "../pages/Sign/Sign";
import React from "react";

interface HomeProps {
    component: (props:HomeProps) => JSX.Element,
    name: string;
}

interface Routine{
    path: string,
    component: (props) => JSX.Element,
    name: string,
}

const Routes:Routine[] = [
    {
        path: "",
        component: Home,
        name: "Home Screen", 
    },
    {
        path: "/Dashboard",
        component: Dashboard,
        name: "Dashboard",
    },
    {
        path:"/About",
        component: About,
        name: "About",
    },
    {
        path:"/Login",
        component: Login,
        name: "Login",
    },
    {
        path: "/Sign",
        component: Sign,
        name: "Sign",
    },
];

export default Routes;