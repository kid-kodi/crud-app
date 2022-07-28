import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/layouts/AppLayout";
import DashboardPage from "./pages/DashboardPage";
import UsersDetailsPage from "./pages/UsersDetailsPage";
import UsersEditPage from "./pages/UsersEditPage";
import UsersListPage from "./pages/UsersListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="" element={<DashboardPage />} />
          <Route path="users" element={<UsersListPage />} />
          <Route path="/users/:id" element={<UsersDetailsPage />} />
          <Route path="/users/edit/:id" element={<UsersEditPage />} />
          <Route path="/users/add" element={<UsersEditPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
