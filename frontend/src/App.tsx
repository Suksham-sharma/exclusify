import AppWalletProvider from "./Componenets/AppWalletProvider";
import HomeScreen from "./Componenets/HomeScreen";
// import TelegramInviteGenerator from "./Componenets/LinkGenerator";

function App() {
  return (
    <>
      <AppWalletProvider>
        <HomeScreen />
      </AppWalletProvider>
    </>
  );
}

export default App;
