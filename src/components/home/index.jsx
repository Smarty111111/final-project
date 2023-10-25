import { useState } from "react";
import { useLocalStorage } from "../../hook/useLocalStorage";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useLocalStorage("USER", "");
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      {user && (
        <div>
          <div>
            <div style={{ margin: 25 }}>Welcome, {user}!</div>
            <button title="Logout" onClick={() => setUser("")}>
              Logout
            </button>
          </div>
        </div>
      )}
      {!user && (
        <div>
          <label>Enter your name: </label>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            title="Enter your name"
            style={{ margin: 25 }}
          />
          <button
            title="Login"
            onClick={() => {
              setUser(inputValue);
              setTimeout(() => navigate("/chat"), 2000);
            }}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
