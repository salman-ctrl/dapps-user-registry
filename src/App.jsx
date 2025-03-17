import RegisterForm from "./Component/RegisterForm";
import UserInfo from "./Component/UserInfo";

function App() {
  return (
    <div className="flex flex-col items-center gap-8 min-h-screen justify-center">
      <h1 className="text-2xl font-bold">User Registry DApp</h1>
      <RegisterForm />

    </div>
  );
}

export default App;
