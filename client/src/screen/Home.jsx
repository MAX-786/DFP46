import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getItem } from "../config/FirebaseMethods";
import {data} from '../components/homeData';
import "../style/Home.scss";
import {Container} from "@mui/material";
import Footer from "./Footer";

export default function Home() {
  let [course, setCourse] = useState();
  let [quiz, setQuiz] = useState();
  let [studentRegistration, setStudentRegistration] = useState();
  let [trainerRegistration, setTrainerRegistration] = useState();
  // let [data, setData] = useState([]);
  let [data1, setData1] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    getItem("course")
      .then((_) => {
        setCourse(Object.values(_));
      })
      .catch((_) => console.log(_));

    getItem("quiz")
      .then((_) => {
        setQuiz(Object.values(_));
      })
      .catch((_) => console.log(_));

    getItem("StudentRegistration")
      .then((_) => {
        setStudentRegistration(Object.values(_));
      })
      .catch((_) => console.log(_));

    getItem("TrainerRegistration")
      .then((_) => {
        setTrainerRegistration(Object.values(_));
      })
      .catch((_) => console.log(_));

    getItem("course")
      .then((_) => {
        let arr = Object.values(_).filter((value, index) => {
          if (value.isPubliclyOpen === "yes") {
            return value;
          }
        });
        setData(arr);
      })
      .catch((_) => console.log(_));

    getItem("quiz")
      .then((_) => setData1(Object.values(_)))
      .catch((_) => console.log(_));
  }, []);

  return (
    <Container>
      <section className="home">
        <div className="hero">
          <div className="leftSide">
            <h1>
              <span>Explore</span> Wonders of Class XII Physics
            </h1>
            <p>
              Embark on an educational journey that delves into the intriguing
              world of physics, where theory and application come together to
              unravel the mysteries of the universe
            </p>
            <button onClick={() => navigate("/course")}>View Chapters</button>
          </div>
          <div className="rightSide1">
            <div className="image"></div>
          </div>
        </div>

        <div className="courses">
          <div className="flex w-full ">
            {data && data.length > 0 ? (
              data.map((value, index) => {
                return (
                  <div
                    key={index}
                    className=" overflow-hidden rounded-lg shadow-md m-2 cursor-pointer hover:shadow-lg"
                    // onClick={() =>
                    //   navigate("course/course-detail", { state: value })
                    // }
                  >
                    <img
                      src={value.image}
                      alt="image not found"
                      className="w-full h-[15rem]"
                    />
                    <div className="w-full p-[1rem] flex flex-col justify-start items-start ">
                      <h1 className="py-[1rem] px-[0rem] text-[1.6rem] text-[#0c0015] ">{value.heading}</h1>
                      <p className="py-[0.2rem] text-[#0c0015]">{value.content}</p>
                      {/* <p>no. of Quiz: {value.noOfQuiz}</p> */}
                      {/* <h2>RS {value.price}</h2> */}
                    </div>
                  </div>
                );
              })
            ) : (
              <p>Empty</p>
            )}
          </div>
        </div>

        <div className="quiz12">
          <div className="in-box1">
            <h1>Get the learning app</h1>

            <p>
              Download lessons modules and learn anytime, anywhere with the
              Class XII Physics app.
            </p>

            <img src="../images/card/img5.png" alt=""></img>
          </div>

          <div className="in-box2">
            <img src="../images/card/img4.png" alt=""></img>
          </div>
        </div>

        {/* <Footer/> */}
      </section>
    </Container>
  );
}

// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { getItem } from "../config/FirebaseMethods";
// import { data } from "../components/homeData";
// import { Box, Button, Typography,Container } from "@mui/material";
// // import "../style/Home.scss";

// export default function Home() {
//   const [course, setCourse] = useState();
//   const [quiz, setQuiz] = useState();
//   const [studentRegistration, setStudentRegistration] = useState();
//   const [trainerRegistration, setTrainerRegistration] = useState();
//   const [data1, setData1] = useState([]);

//   const navigate = useNavigate();

//   useEffect(() => {
//     getItem("course")
//       .then((_) => {
//         setCourse(Object.values(_));
//       })
//       .catch((_) => console.log(_));

//     getItem("quiz")
//       .then((_) => {
//         setQuiz(Object.values(_));
//       })
//       .catch((_) => console.log(_));

//     getItem("StudentRegistration")
//       .then((_) => {
//         setStudentRegistration(Object.values(_));
//       })
//       .catch((_) => console.log(_));

//     getItem("TrainerRegistration")
//       .then((_) => {
//         setTrainerRegistration(Object.values(_));
//       })
//       .catch((_) => console.log(_));

//     getItem("course")
//       .then((_) => {
//         const arr = Object.values(_).filter((value, index) => {
//           if (value.isPubliclyOpen === "yes") {
//             return value;
//           }
//         });
//         setData(arr);
//       })
//       .catch((_) => console.log(_));

//     getItem("quiz")
//       .then((_) => setData1(Object.values(_)))
//       .catch((_) => console.log(_));
//   }, []);

//   return (
//     <Container>
//       <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//         <Box>
//           <Typography variant="h2" component="h1">
//             <span>Explore</span> Wonders of Class XII Physics
//           </Typography>
//           <Typography variant="body1" component="p">
//             Embark on an educational journey that delves into the intriguing
//             world of physics, where theory and application come together to
//             unravel the mysteries of the universe
//           </Typography>
//           <Button variant="contained" onClick={() => navigate("/course")}>
//             View Chapters
//           </Button>
//         </Box>
//       </Box>

//       <Box>
//         <Box>
//           {data && data.length > 0 ? (
//             data.map((value, index) => (
//               <Box key={index}>
//                 <img src={value.image} alt="image not found" width="300px" />
//                 <Box>
//                   <Typography variant="h1" component="h1">
//                     {value.heading}
//                   </Typography>
//                   <Typography variant="body1" component="p">
//                     {value.content}
//                   </Typography>
//                 </Box>
//               </Box>
//             ))
//           ) : (
//             <Typography variant="body1" component="p">
//               Empty
//             </Typography>
//           )}
//         </Box>
//       </Box>

//       <Box>
//         <Box>
//           <Typography variant="h1" component="h1">
//             Get the learning app
//           </Typography>
//           <Typography variant="body1" component="p">
//             Download lessons modules and learn anytime, anywhere with the Class
//             XII Physics app.
//           </Typography>
//           <img src="../images/card/img5.png" alt="" />
//         </Box>
//         <Box>
//           <img src="../images/card/img4.png" alt="" />
//         </Box>
//       </Box>

//       <Box>
//         <Box>
//           <Typography variant="h1" component="h1" onClick={() => navigate("/")}>
//             XII Physics
//           </Typography>
//           <Typography variant="body1" component="p">
//             0987-654-321
//           </Typography>
//         </Box>
//         <Box>
//           <Typography variant="h1" component="h1">
//             Pages
//           </Typography>
//           <ul>
//             <li>
//               <Link to={"course"}>Learn</Link>
//             </li>
//             <li>
//               <Link to={"quiz"}>Practice</Link>
//             </li>
//             <li>
//               <Link to={"result"}>Activity</Link>
//             </li>
//             <li>
//               <Link to={"login"}>Login</Link>
//             </li>
//             <li>
//               <Link to={"sign-up"}>Sign up</Link>
//             </li>
//           </ul>
//         </Box>
//       </Box>

//       <Box>
//         <Typography variant="h4" component="h4">
//           Copyright © {new Date().getFullYear()} -XII Physics- All rights
//           reserved
//         </Typography>
//         <Box>
//           <a href="#">
//             <i />
//           </a>
//         </Box>
//       </Box>
//     </Container>
//   );
// }
