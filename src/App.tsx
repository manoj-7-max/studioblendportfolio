import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Projects from "./pages/admin/Projects";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
      <Toaster position="bottom-right" closeButton />
    </BrowserRouter>
  );
}