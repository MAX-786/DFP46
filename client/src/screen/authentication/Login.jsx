// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { signInUser } from "../../config/FirebaseMethods";

// import "../../style/login.scss";

// export default function Login() {
//   let [currentValue, setCurrentValue] = useState({
//     email: "",
//     password: "",
//   });
//   let [error, setError] = useState("");
//   let [loading, setLoading] = useState("");
//   let navigate = useNavigate();

//   const currentV = (e) => {
//     let { value, name } = e.target;
//     setCurrentValue((val) => {
//       return { ...val, [name]: value };
//     });
//   };

//   const userData = (e) => {
//     e.preventDefault();
//     setLoading("wating...");
//     signInUser(currentValue)
//       .then((_) => {
//         alert(_);
//         setError("");
//         navigate("/");
//         // window.onload(() => {console.log("page load")});
//       })
//       .catch((_) => {
//         setError(_);
//         setLoading("");
//       });
//   };

//   return (
//     <section className="login">
//       <div className="heading">
//         <h1>Login</h1>
//       </div>

//       <form onSubmit={userData}>
//         <input
//           type="email"
//           placeholder="Enter Email"
//           name="email"
//           onChange={currentV}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Enter Password"
//           name="password"
//           onChange={currentV}
//           required
//         />

//         <div className="buttonPart">
//           {error ? <p className="error">{error}</p> : null}
//         </div>

//         {loading ? <button>{loading}</button> : <button>Login</button>}
//       </form>

//       <div className="switchPage">
//         <Link to="/signup">Sign up</Link>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInUser } from "../../config/FirebaseMethods";
import { TextField, Button, Typography } from "@mui/material";
import "../../style/login.scss";

export default function Login() {
  const [currentValue, setCurrentValue] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    signInUser(currentValue)
      .then(() => {
        setError("");
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <section className="login">
      <div className="heading">
        <Typography variant="h4">Login</Typography>
      </div>

      <form onSubmit={handleSubmit}>
        <TextField
          type="email"
          label="Email"
          name="email"
          value={currentValue.email}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          type="password"
          label="Password"
          name="password"
          value={currentValue.password}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />

        {error && (
          <Typography variant="body1" color="error">
            {error}
          </Typography>
        )}

        <div className="buttonPart">
          <Button type="submit" variant="contained" disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </Button>
        </div>
      </form>

      <div className="switchPage">
        <Typography variant="body1">
          Don't have an account?{" "}
          <Link to="/signup">
            <u>Sign up</u>
          </Link>
        </Typography>
      </div>
    </section>
  );
}
