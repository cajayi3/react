import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Sign from "../pages/Sign/Sign";
import CreateCar from "../pages/CreateCar";
import Navbar from "../components/Navbar";





const routes = [
{ path:"/", component:Home},
{ path: "/components/Navbar", component:Navbar},
{ path:"/Login/Login", component:Login}, 
{ path:"/About/About", component:About}, 
{ path:"/Sign/Sign", component:Sign},
{ path:"/Dashboard/Dashboard", component:Dashboard},
{ path:"/CreateCar", component:CreateCar}
]

export default routes;  
           
               
