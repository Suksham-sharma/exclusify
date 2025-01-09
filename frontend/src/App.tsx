import AppWalletProvider from "./components/AppWalletProvider";
import { SignInPage } from "./components/SignIn";
// import TelegramInviteGenerator from "./Componenets/LinkGenerator";

function App() {
  return (
    <>
      <AppWalletProvider>
        <SignInPage />
      </AppWalletProvider>
    </>
  );
}

export default App;
