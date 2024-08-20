import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import JobPage from "./pages/JobPage";
import CreateJobPage from "./pages/CreateJobPage";
import LoginPage from "./pages/LoginPage";
import { getUser } from "./lib/auth";

function App() {
   const navigate = useNavigate();
   const [user, setUser] = useState(getUser);

   const handleLogin = (user) => {
      setUser(user);
      navigate("/");
   };

   const handleLogout = () => {
      setUser(null);
      navigate("/");
   };

   return (
      <>
         <NavBar user={user} onLogout={handleLogout}></NavBar>
         <main className="section">
            <Routes>
               <Route path="/" element={<HomePage></HomePage>}></Route>
               <Route
                  path="/companies/:companyId"
                  element={<CompanyPage></CompanyPage>}
               ></Route>
               <Route path="/jobs/:jobId" element={<JobPage></JobPage>}></Route>
               <Route
                  path="/jobs/new"
                  element={<CreateJobPage></CreateJobPage>}
               ></Route>
               <Route
                  path="/login"
                  element={<LoginPage onLogin={handleLogin}></LoginPage>}
               ></Route>
            </Routes>
         </main>
      </>
   );
}

export default App;
