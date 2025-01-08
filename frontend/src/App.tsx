import AppWalletProvider from "./components/AppWalletProvider";
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
