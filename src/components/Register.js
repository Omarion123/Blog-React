import { BiSolidHide } from "react-icons/bi";
const Login = () => {
  return (
    <div className="login-form">
      <div className="login-header">
        <h1>Register Form</h1>
        <p>
          Already have an account?
          <span className="click-to-register">
            <a href="/register"> Login</a>
          </span>
        </p>
      </div>
      <div className="login-username">
        <input
          type="text"
          placeholder="Username..."
          className="username-focus"
        />
      </div>
      <div className="login-password">
        <input type="password" placeholder="Password..." />
        <BiSolidHide className="login-password-hide-icon" />
      </div>
      <div className="login-button register-button">
        <h1>Register</h1>
      </div>
    </div>
  );
};

export default Login;
