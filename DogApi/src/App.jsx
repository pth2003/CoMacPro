import { Container } from "@mui/material";
import BreedPage from "./Page/BreedPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFoundPage from "./Page/NotFoundPage";
import ErrorPage from "./Page/ErrorPage";
import DisconnectPage from "./Page/DisconnectPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BreedPage />} />
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/disconnected" element={<DisconnectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
