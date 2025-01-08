import AppWalletProvider from "./components/AppWalletProvider";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import LandingPage from "./pages/Landing";
// import TelegramInviteGenerator from "./Componenets/LinkGenerator";

function App() {
  return (
    <>
      <AppWalletProvider>
        <LandingPage />
      </AppWalletProvider>
    </>
  );
}

export default App;
