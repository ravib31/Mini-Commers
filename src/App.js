import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Headers/Header";
import Body from "./components/Body/Body";
import FetchData from "./components/FetchData";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/Headers/About";
import Contact from "./components/Headers/Contact";
import ErrorElement from "./components/Error";
import ProductMenu from "./components/Body/ProductMenu";
// import Grocery from './components/Grocery';
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import store from "./utils/store";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";

const Grocery = lazy(() => import("./components/Headers/Grocery"));
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Outlet />
        <Footer/>
        {/* <FetchData/> */}
      </div>
    </Provider>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/products/:proId",
        element: <ProductMenu />,
      },
    ],
    errorElement: <ErrorElement />,
  },
]);

// export default App;
