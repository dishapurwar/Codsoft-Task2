import { Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import "./About.css";

const CustomButton = styled(Button)({
  backgroundColor: 'rgb(27, 44, 75)',
  color: '#fff',
  margin: '1vmax 0',
  '&:hover': {
    backgroundColor: 'rgb(17, 34, 65)',
  },
});

const About = ({ about }) => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <div className="card left">
          <img src={about.avatar.url} alt="Avatar" className="aboutAvatar" />
          <Typography variant="h4" style={{ margin: "1vmax 0", color: "#fafafa" }}>
            {about.name}
          </Typography>
          <Typography>{about.title}</Typography>
          <CustomButton
            variant="contained"
            onClick={() => window.open(about.subtitle, "_blank")}
          >
            View Resume
          </CustomButton>
        </div>

        <div className="card right">
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "1.5",
              letterSpacing: "5px",
              textAlign: "right",
              color: "#f1f1f1",
            }}
          >
            {about.description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;




// import { Typography, Button } from "@mui/material";
// import React from "react";
// import "./About.css";

// const About = ({ about }) => {
//   const openResumeLink = () => {
//     // Replace 'about.resume' with the actual field name where your resume link is stored
//     const resumeLink = about.resume; // Assuming about.resume contains the resume link

//     // Open the resume link in a new tab
//     window.open(resumeLink, "_blank");
//   };

//   return (
//     <div className="about">
//       <div className="aboutContainer">
//         <div className="card left">
//           <img src={about.avatar.url} alt="Abhi" className="aboutAvatar" />
//           <Typography variant="h4" style={{ margin: "1vmax 0", color: "#fafafa" }}>
//             {about.name}
//           </Typography>
//           <Typography>{about.title}</Typography>
//           {/* Render a button for the resume */}
//           <Button
//             variant="contained"
//             style={{ backgroundColor: "rgb(27, 44, 75)", color: "#fafafa", marginTop: "1rem" }}
//             onClick={openResumeLink}
//           >
//             View Resume
//           </Button>
//         </div>

//         <div className="card right">
//           <Typography
//             style={{
//               wordSpacing: "5px",
//               lineHeight: "1.5",
//               letterSpacing: "5px",
//               textAlign: "right",
//               color: "#f1f1f1",
//             }}
//           >
//             {about.description}
//           </Typography>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
