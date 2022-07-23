import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import DashboardPage from "./pages/DashboardPage";
import UsersDetailsPage from "./pages/UsersDetailsPage";
import UsersEditPage from "./pages/UsersEditPage";
import UsersListPage from "./pages/UsersListPage";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Dashboard</Link> | <Link to="users">Utilisateurs</Link>
      </nav>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/users" element={<UsersListPage />} />
        <Route path="/users/:id" element={<UsersDetailsPage />} />
        <Route path="/users/edit/:id" element={<UsersEditPage />} />
        <Route path="/users/add" element={<UsersEditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
