import { BiSolidHide } from "react-icons/bi";
const Login = () => {
  return (
    <div className="login-form">
      <div className="login-header">
        <h1>Login Form</h1>
        <p>
          New to <span>OMY-BLOGS </span>
          <span className="click-to-register">
            <a href="/register">Register</a>
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
      <div className="forgot-password">
        <a href="/forgot-password">Forgot Password?</a>
      </div>
      <div className="login-button">
        <h1>Login</h1>
      </div>
    </div>
  );
};

export default Login;
