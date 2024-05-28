import React from "react";
import Navbar from "./pages/Navbar";
import  { Routes, Route, HashRouter} from "react-router-dom";
import "./index.css";
import routes from './config/routes';

function App() {
  return ( 
    <HashRouter>
      <Navbar />
        <Routes>
            { routes.map((route: any, index: any) => (
              <Route
                key={index}
                path={route.path}
                element={
                  <route.component />
                }
              />
          )) }
        </Routes>
    </HashRouter>
  )
}

export default App;