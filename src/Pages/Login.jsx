import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const { email, setEmail, pass, setPass } = useContext(AuthContext);
    const navigate = useNavigate();

    const onFormSubmit = (e) => {
        e.preventDefault();

        // Simple check
        if (email === "mohit@gmail.com" && pass === "mohit123") {
            localStorage.setItem("authToken", "loggedin123");
            navigate("/dashboard");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <form onSubmit={onFormSubmit}>
            <div className="login-items">
                <label>Email</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </div>

            <div className="login-items">
                <label>Password</label>
                <input 
                    type="password" 
                    value={pass} 
                    onChange={(e) => setPass(e.target.value)} 
                />
            </div>

            <button type="submit">Login</button>
        </form>
    );
};
