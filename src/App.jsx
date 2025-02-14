import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout.jsx';
import Home from './Components/Home/Home.jsx';
import Cart from "./Components/Cart/Cart.jsx";
import WishList from "./Components/WishList/WishList.jsx";
import Products from "./Components/Products/Products.jsx";
import Categories from "./Components/Categories/Categories.jsx";
import Brands from "./Components/Brands/Brands.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import Notfound from "./Components/Notfound/Notfound.jsx";
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx';
import ProtectedAuth from './Components/ProtectedAuth/ProtectedAuth.jsx';
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';
import { Toaster } from 'react-hot-toast';
import AllOrders from './Components/AllOrders/AllOrders.jsx';
import BrandsDetails from './Components/BrandsDetails/BrandsDetails.jsx';



function App() {
  const router = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        { index: true, element: <ProtectedRoute> <Home /> </ProtectedRoute> },
        { path: "cart", element: <ProtectedRoute> <Cart /> </ProtectedRoute> },
        { path: "wishList", element: <ProtectedRoute> <WishList /> </ProtectedRoute> },
        { path: "products", element: <ProtectedRoute> <Products /> </ProtectedRoute> },
        { path: "productDetails/:pId/:cId", element: <ProtectedRoute> <ProductDetails /> </ProtectedRoute> },
        { path: "categories", element: <ProtectedRoute> <Categories /> </ProtectedRoute> },
        { path: "brands", element: <ProtectedRoute> <Brands /> </ProtectedRoute> },
        { path: "allOrders", element: <ProtectedRoute> <AllOrders /> </ProtectedRoute> },
        { path: "brandsDetails", element: <ProtectedRoute> <BrandsDetails /> </ProtectedRoute> },
        
        
        { path: "login", element: <ProtectedAuth> <Login /> </ProtectedAuth> },
        { path: "register", element: <ProtectedAuth> <Register /> </ProtectedAuth> },
        { path: "*", element: <Notfound /> }
      ]
    }
  ])


  


  return (
    <>
      <Toaster 
        position="top-right"
        reverseOrder={false}/>
      <RouterProvider router={router} />

    </>
  )
}

export default App
