import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordShow = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://15.206.133.74/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      setEmail("");
      setPassword("");

      const jsonData = await response.json();
      if (response.ok) {
        localStorage.setItem("token", jsonData.data.token);

        alert(`Welcome, ${jsonData.data.name}!`);
        console.log("Token:", jsonData.data.token);
        
      } else {
        alert(`Login failed: ${jsonData.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 items-center w-full max-w-sm"
    >
      <input
        type="email"
        placeholder="Email"
        className="text-lg md:text-xl p-2 w-full rounded-md border border-gray-300 focus:outline-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <div className="relative w-full">
        <input
          type={showPassword ? "password" : "text"}
          placeholder="Password"
          className="text-lg md:text-xl p-2 w-full rounded-md border border-gray-300 focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="button"
          onClick={togglePasswordShow}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <Eye /> : <EyeOff />}
        </button>
      </div>
      <button
        className="bg-custom-red w-full p-2 text-center rounded-md text-xl md:text-2xl font-medium text-white mt-2 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
        type="submit"
      >
        Continue
      </button>
    </form>
  );
};

export default LoginForm;
