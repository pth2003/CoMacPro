import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import { TestPage } from "./page/TestPage";
import PageLoading from "./components/Loading/PageLoading";
import { useSelector } from "react-redux";
function App() {
  const ProtectedRoute = ({ children }) => {
    const { user } = useSelector((state) => state.auth);
    return user ? children : <Navigate to="/login" replace />;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<TestPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
