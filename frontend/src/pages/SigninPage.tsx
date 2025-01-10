import { AuthScreen } from "../components/AuthScreen";
import SignInComponent from "../components/SigninModal";

function SigninPage() {
  return (
    <div>
      <AuthScreen
        type="signin"
        heading="Get Acess to your community Insights and More 
        Sign in to access your personalized dashboard, and explore a world of possibilities."
        authComponent={<SignInComponent />}
      />
    </div>
  );
}

export default SigninPage;
