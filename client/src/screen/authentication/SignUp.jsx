// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { createUser } from "../../config/FirebaseMethods";

// // style
// import "../../style/login.scss";

// export default function SignUp() {
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

//     createUser(currentValue)
//       .then((_) => {
//         alert("successfully created");
//         setError("");
//         navigate("/login");
//       })
//       .catch((_) => {
//         setError(_);
//         setLoading("");
//       });
//   };

//   return (
//     <section className="SignUp">
//       <div className="heading">
//         <h1>SignUp</h1>
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

//         <button>Sign up</button>
//       </form>

//       <div className="buttonPart">
//         {error ? <p className="error">{error}</p> : null}
//         {loading ? <p className="loading">{loading}</p> : null}
//       </div>

//       <div className="switchPage">
//         <Link to="/login">Login</Link>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../config/FirebaseMethods";
import { TextField, Button, Typography } from "@mui/material";
import "../../style/login.scss";

export default function SignUp() {
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
    createUser(currentValue)
      .then(() => {
        setError("");
        setLoading(false);
        alert("Successfully created");
        navigate("/login");
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <section className="SignUp">
      <div className="heading">
        <Typography variant="h4">Sign Up</Typography>
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

        <div className="buttonPart">
          <Button type="submit" variant="contained" disabled={loading}>
            {loading ? "Loading..." : "Sign Up"}
          </Button>
        </div>
      </form>

      <div className="buttonPart">
        {error && (
          <Typography variant="body1" color="error">
            {error}
          </Typography>
        )}
        {loading && <Typography variant="body1">Loading...</Typography>}
      </div>

      <div className="switchPage">
        <Typography variant="body1">
          Already have an account?{" "}
          <Link to="/login">
            <u>Login</u>
          </Link>
        </Typography>
      </div>
    </section>
  );
}
