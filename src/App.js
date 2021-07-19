import React from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/nav/Header";
import Signin from "./pages/auth/Sigin";
import SigninEmploye from "./pages/auth/SigninEmploye";
import AdminRoute from "./Private/AdminRoute";
import EmployeRoute from "./Private/EmployeRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Register from "./pages/auth/Register";
import EmployeCreate from "./pages/Admin/Employe/employe";
import ViewEmployes from "./pages/Admin/Employe/ViewEmployes";
import UpdateEmploye from "./pages/Admin/Employe/UpdateEmploye";
import EmployeDashboard from "./pages/EmployeDashboard/Dashboard";
import CreateProduct from "./pages/EmployeDashboard/CreateProduct";
import CreateCategory from "./pages/EmployeDashboard/CreateCategory";
import AllCategories from "./pages/EmployeDashboard/Allcategories";
import UpdateCategory from "./pages/EmployeDashboard/UpdateCategory";
import ViewProducts from "./pages/EmployeDashboard/ViewProdcts";
import UpdateProduct from "./pages/EmployeDashboard/UpdateProduct";
import Home from './components/Home/home'
import SingleProduct from "./components/Home/SingleProduct"
import Cart from "./components/cart/cart";
import Payment from "./components/cart/Payment";


const App = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/payment" component={Payment}/>
        <Route exact path="/single/product/:id" component={SingleProduct} />
        <Route exact path="/signin/employe" component={SigninEmploye} />
        <Route exact path="/cart" component={Cart} />
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
        <AdminRoute exact path="/create/employe" component={EmployeCreate} />
        <AdminRoute exact path="/view/employes" component={ViewEmployes} />
        <AdminRoute
          exact
          path="/update/employe/:id"
          component={UpdateEmploye}
        />
        <EmployeRoute
          exact
          path="/employe/dashboard"
          component={EmployeDashboard}
        />
        <EmployeRoute exact path="/create/product" component={CreateProduct} />
        <EmployeRoute
          exact
          path="/create/category"
          component={CreateCategory}
        />
        <EmployeRoute exact path="/view/categories" component={AllCategories} />
        <EmployeRoute
          exact
          path="/update/category/:id"
          component={UpdateCategory}
        />
        <EmployeRoute
          exact
          path="/view/products"
          component={ViewProducts}
        />
        <EmployeRoute exact path="/update/product/:id" component={UpdateProduct}/>
      </Switch>
    </>
  );
};

export default App;
