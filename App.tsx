import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import StudyMaterials from "./pages/StudyMaterials";
import Timetable from "./pages/Timetable";
import Attendance from "./pages/Attendance";
import LostFound from "./pages/LostFound";
import Clubs from "./pages/Clubs";
import Transport from "./pages/Transport";
import Marketplace from "./pages/Marketplace";
import Placements from "./pages/Placements";
import ImportantLinks from "./pages/ImportantLinks";
import Feedback from "./pages/Feedback";
import Forum from "./pages/Forum";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [user, setUser] = useState<any>(null);

  const handleLogin = (userData: any) => {
    setUser(userData);
  };

  const handleRegister = (userData: any) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {!user ? (
            <Routes>
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/register" element={<Register onRegister={handleRegister} />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          ) : (
            <div className="flex min-h-screen w-full bg-background">
              <Sidebar />
              <div className="flex-1 lg:ml-64 min-h-screen flex flex-col">
                <Header user={user} onLogout={handleLogout} />
                <main className="flex-1 p-6">
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/materials" element={<StudyMaterials />} />
                    <Route path="/timetable" element={<Timetable />} />
                    <Route path="/attendance" element={<Attendance />} />
                    <Route path="/lost-found" element={<LostFound />} />
                    <Route path="/clubs" element={<Clubs />} />
                    <Route path="/transport" element={<Transport />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/placements" element={<Placements />} />
                    <Route path="/links" element={<ImportantLinks />} />
                    <Route path="/feedback" element={<Feedback />} />
                    <Route path="/forum" element={<Forum />} />
                    <Route path="/profile" element={<Profile user={user} />} />
                    <Route path="/" element={<Navigate to="/dashboard" replace />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </div>
            </div>
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
