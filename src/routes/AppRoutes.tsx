// src/routes/AppRoutes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/layout";

// pages
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import CartPage from "../pages/CartPage";
import Checkout from "../pages/Checkout";
import OrderConfirmation from "../pages/OrderConfirmation";

// account
import Login from "../pages/account/Login";
import Register from "../pages/account/signup";
import Profile from "../pages/account/Profile";
import FindIdPage from "../pages/account/find-id";
import FindPasswordPage from "../pages/account/find-password";
import SignupPage from "../pages/account/signup";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* main */}
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/products"
        element={
          <Layout>
            <Products />
          </Layout>
        }
      />
      <Route
        path="/products/:id"
        element={
          <Layout>
            <ProductDetail />
          </Layout>
        }
      />
      <Route
        path="/cart"
        element={
          <Layout>
            <CartPage />
          </Layout>
        }
      />
      <Route
        path="/checkout"
        element={
          <Layout>
            <Checkout />
          </Layout>
        }
      />
      <Route
        path="/order-confirmation"
        element={
          <Layout>
            <OrderConfirmation />
          </Layout>
        }
      />

      {/* account */}
      <Route
        path="/login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path="/register"
        element={
          <Layout>
            <Register />
          </Layout>
        }
      />
      <Route
        path="/profile"
        element={
          <Layout>
            <Profile />
          </Layout>
        }
      />
      <Route
        path="/find-id"
        element={
          <Layout>
            <FindIdPage />
          </Layout>
        }
      />
      <Route
        path="/find-password"
        element={
          <Layout>
            <FindPasswordPage />
          </Layout>
        }
      />
			<Route
				path="/signup"
				element={
					<Layout>
						<SignupPage />
					</Layout>
				}
			/>
    </Routes>
  );
};

export default AppRoutes;
