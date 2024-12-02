import Logo from "./components/Logo";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <main className="min-h-screen w-full bg-gray-300 flex justify-center items-center p-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl gap-8 items-center justify-center">
        <Logo />
        <div className="flex flex-col items-center w-full max-w-md px-4 py-6 gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center">
            RecruitMantra
          </h1>
          <div className="flex flex-col items-center w-full gap-5">
            <span className="text-2xl md:text-3xl font-semibold">Log-In</span>
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
