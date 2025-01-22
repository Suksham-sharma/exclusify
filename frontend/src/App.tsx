import { BrowserRouter, Route, Routes } from "react-router-dom";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import GettingStarted from "./pages/GettingStarted";
import { Toaster } from "sonner";
import Home from "./pages/Home";
import LandingPage from "./pages/Landing";
import CreateWebsite from "./pages/CreateWebsite";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-website" element={<CreateWebsite />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
