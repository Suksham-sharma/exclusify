import { AuthScreen } from "../components/AuthScreen";
import SignUpComponent from "../components/SignupModal";

function SignupPage() {
  return (
    <div>
      <AuthScreen
        type="signup"
        heading="Create an Exclusive Community With Us
        Just Sign Up , and leave all the nitty gritty of management to us."
        authComponent={<SignUpComponent />}
      />
    </div>
  );
}

export default SignupPage;
