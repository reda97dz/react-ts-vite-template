import { Routes } from "react-router";
import { BrowserRouter, Route as ReactRoute } from "react-router-dom";

import { Route } from "./components/Core/Route";
import { routes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(route => (
          <ReactRoute key={route.path} element={<Route />}>
            <ReactRoute path={route.path} element={<route.component />} />
          </ReactRoute>
        ))}
        <ReactRoute path="/" element={<h1>Login</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
