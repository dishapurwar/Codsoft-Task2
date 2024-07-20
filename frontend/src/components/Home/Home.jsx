// import React, { useEffect } from "react";
// import "./Home.css";
// import * as THREE from "three";
// import moonImage from "../../Images/moon.jpg";
// import venusImage from "../../Images/venus.jpg";
// import spaceImage from "../../Images/space.jpg";
// import { Typography } from "@mui/material";
// import TimeLine from "../TimeLine/TimeLine";
// import {
//   SiCplusplus,
//   SiReact,
//   SiJavascript,
//   SiMongodb,
//   SiNodedotjs,
//   SiExpress,
//   SiCss3,
//   SiHtml5,
//   SiThreedotjs,
// } from "react-icons/si";

// import { Link } from "react-router-dom";
// import { MouseOutlined } from "@mui/icons-material";

// const Home = ({ timelines = [], youtubes = [], skills = {} }) => {
//   useEffect(() => {
//     const textureLoader = new THREE.TextureLoader();

//     const moonTexture = textureLoader.load(moonImage);
//     const venusTexture = textureLoader.load(venusImage);
//     const spaceTexture = textureLoader.load(spaceImage);

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.set(4, 4, 8);

//     const canvas = document.querySelector(".homeCanvas");
//     const renderer = new THREE.WebGLRenderer({ canvas });

//     const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
//     const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
//     const moon = new THREE.Mesh(moonGeometry, moonMaterial);

//     const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
//     const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
//     const venus = new THREE.Mesh(venusGeometry, venusMaterial);
//     venus.position.set(8, 5, 5);

//     const pointLight = new THREE.PointLight(0xffffff, 1);
//     const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

//     pointLight.position.set(8, 5, 5);
//     pointLight2.position.set(-8, -5, -5);

//     scene.add(moon);
//     scene.add(venus);
//     scene.add(pointLight);
//     scene.add(pointLight2);
//     scene.background = spaceTexture;

//     const constSpeed = 0.01;
//     window.addEventListener("mousemove", (e) => {
//       if (e.clientX <= window.innerWidth / 2) {
//         moon.rotation.x -= constSpeed;
//         moon.rotation.y += constSpeed;
//         venus.rotation.x -= constSpeed;
//         venus.rotation.y += constSpeed;
//       }

//       if (e.clientX > window.innerWidth / 2) {
//         moon.rotation.x -= constSpeed;
//         moon.rotation.y -= constSpeed;
//         venus.rotation.x -= constSpeed;
//         venus.rotation.y -= constSpeed;
//       }

//       if (e.clientY > window.innerHeight / 2) {
//         moon.rotation.x -= constSpeed;
//         moon.rotation.y += constSpeed;
//         venus.rotation.x -= constSpeed;
//         venus.rotation.y += constSpeed;
//       }

//       if (e.clientY <= window.innerHeight / 2) {
//         moon.rotation.x -= constSpeed;
//         moon.rotation.y -= constSpeed;
//         venus.rotation.x -= constSpeed;
//         venus.rotation.y -= constSpeed;
//       }
//     });

//     const animate = () => {
//       requestAnimationFrame(animate);
//       moon.rotation.y += 0.001;
//       venus.rotation.y += 0.001;
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       renderer.render(scene, camera);
//     };

//     animate();

//     return window.addEventListener("scroll", () => {
//       camera.rotation.z = window.scrollY * 0.001;
//       camera.rotation.y = window.scrollY * 0.003;

//       const skillsBox = document.getElementById("homeskillsBox");

//       if (skillsBox) {
//         if (window.scrollY > 1500) {
//           skillsBox.style.animationName = "homeskillsBoxAnimationOn";
//         } else {
//           skillsBox.style.animationName = "homeskillsBoxAnimationOff";
//         }
//       }
//     });
//   }, []);

//   return (
//     <div className="home">
//       <canvas className="homeCanvas"></canvas>

//       <div className="homeCanvasContainer">
//         <Typography variant="h1">
//           <p>D</p>
//           <p>I</p>
//           <p>S</p>
//           <p>H</p>
//           <p>A</p>
//         </Typography>

//         <div className="homeCanvasBox">
//           <Typography variant="h2">DESIGNER</Typography>
//           <Typography variant="h2">DEVELOPER</Typography>
//           <Typography variant="h2">TEACHER</Typography>
//           <Typography variant="h2">CONTENT CREATOR</Typography>
//         </div>

//         <Link to="/projects">VIEW WORK</Link>
//       </div>

//       <div className="homeScrollBtn">
//         <MouseOutlined />
//       </div>

//       <div className="homeContainer">
//         <Typography variant="h3">TIMELINE</Typography>
//         <TimeLine timelines={timelines} />
//       </div>

//       <div className="homeSkills">
//         <Typography variant="h3">SKILLS</Typography>

//         <div className="homeCubeSkills">
//           {skills.image1 && (
//             <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
//               <img src={skills.image1.url} alt="Face1" />
//             </div>
//           )}
//           {skills.image2 && (
//             <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
//               <img src={skills.image2.url} alt="Face2" />
//             </div>
//           )}
//           {skills.image3 && (
//             <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
//               <img src={skills.image3.url} alt="Face3" />
//             </div>
//           )}
//           {skills.image4 && (
//             <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
//               <img src={skills.image4.url} alt="Face4" />
//             </div>
//           )}
//           {skills.image5 && (
//             <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
//               <img src={skills.image5.url} alt="Face5" />
//             </div>
//           )}
//           {skills.image6 && (
//             <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
//               <img src={skills.image6.url} alt="Face6" />
//             </div>
//           )}
//           {skills.image7 && (
//             <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
//               <img src={skills.image6.url} alt="Face6" />
//             </div>
//           )}
//           {skills.image8 && (
//             <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
//               <img src={skills.image6.url} alt="Face6" />
//             </div>
//           )}
//         </div>

//         <div className="cubeShadow"></div>

//         <div className="homeskillsBox" id="homeskillsBox">
//           <SiCplusplus />
//           <SiHtml5 />
//           <SiCss3 />
//           <SiJavascript />
//           <SiMongodb />
//           <SiExpress />
//           <SiReact />
//           <SiNodedotjs />
//           <SiThreedotjs />
//         </div>
//       </div>

     
//     </div>
//   );
// };

// export default Home;


// import React, { useEffect } from "react";
// import "./Home.css";
// import * as THREE from "three";
// import moonImage from "../../Images/moon.jpg";
// import venusImage from "../../Images/venus.jpg";
// import spaceImage from "../../Images/space.jpg";
// import { Typography } from "@mui/material";
// import TimeLine from "../TimeLine/TimeLine";
// import {
//   SiCplusplus,
//   SiReact,
//   SiJavascript,
//   SiMongodb,
//   SiNodedotjs,
//   SiExpress,
//   SiCss3,
//   SiHtml5,
//   SiThreedotjs,
// } from "react-icons/si";
// import { Link } from "react-router-dom";
// import { MouseOutlined } from "@mui/icons-material";

// const Home = ({ timelines = [], youtubes = [], skills = {} }) => {
//   useEffect(() => {
//     const textureLoader = new THREE.TextureLoader();

//     const moonTexture = textureLoader.load(moonImage);
//     const venusTexture = textureLoader.load(venusImage);
//     const spaceTexture = textureLoader.load(spaceImage);

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.set(4, 4, 8);

//     const canvas = document.querySelector(".homeCanvas");
//     const renderer = new THREE.WebGLRenderer({ canvas });

//     const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
//     const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
//     const moon = new THREE.Mesh(moonGeometry, moonMaterial);

//     const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
//     const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
//     const venus = new THREE.Mesh(venusGeometry, venusMaterial);
//     venus.position.set(8, 5, 5);

//     const pointLight = new THREE.PointLight(0xffffff, 1);
//     const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

//     pointLight.position.set(8, 5, 5);
//     pointLight2.position.set(-8, -5, -5);

//     scene.add(moon);
//     scene.add(venus);
//     scene.add(pointLight);
//     scene.add(pointLight2);
//     scene.background = spaceTexture;

//     const createHeptahedron = (radius, textures) => {
//       const geometry = new THREE.ConeGeometry(radius, radius, 7);
//       const materials = textures.map(texture => new THREE.MeshBasicMaterial({ map: texture }));
//       return new THREE.Mesh(geometry, materials);
//     };

//     const loadTexture = (url) => url ? textureLoader.load(url) : null;

//     const heptahedron1Textures = [
//       loadTexture(skills.image1?.url),
//       loadTexture(skills.image2?.url),
//       loadTexture(skills.image3?.url),
//       loadTexture(skills.image4?.url),
//       loadTexture(skills.image5?.url),
//       loadTexture(skills.image6?.url),
//       loadTexture(skills.image7?.url)
//     ].filter(texture => texture !== null);

//     const heptahedron2Textures = [
//       loadTexture(skills.image8?.url),
//       loadTexture(skills.image9?.url),
//       loadTexture(skills.image10?.url),
//       loadTexture(skills.image11?.url),
//       loadTexture(skills.image12?.url),
//       loadTexture(skills.image13?.url),
//       loadTexture(skills.image14?.url)
//     ].filter(texture => texture !== null);

//     const heptahedron1 = createHeptahedron(2, heptahedron1Textures);
//     const heptahedron2 = createHeptahedron(2, heptahedron2Textures);
//     heptahedron2.position.set(4, 4, 4);

//     scene.add(heptahedron1);
//     scene.add(heptahedron2);

//     const constSpeed = 0.01;
//     window.addEventListener("mousemove", (e) => {
//       const direction = e.clientX <= window.innerWidth / 2 ? constSpeed : -constSpeed;
//       moon.rotation.x -= constSpeed;
//       moon.rotation.y += direction;
//       venus.rotation.x -= constSpeed;
//       venus.rotation.y += direction;
//       heptahedron1.rotation.x -= constSpeed;
//       heptahedron1.rotation.y += direction;
//       heptahedron2.rotation.x -= constSpeed;
//       heptahedron2.rotation.y += direction;
//     });

//     const animate = () => {
//       requestAnimationFrame(animate);
//       moon.rotation.y += 0.001;
//       venus.rotation.y += 0.001;
//       heptahedron1.rotation.y += 0.001;
//       heptahedron2.rotation.y += 0.001;
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       renderer.render(scene, camera);
//     };

//     animate();

//     return window.addEventListener("scroll", () => {
//       camera.rotation.z = window.scrollY * 0.001;
//       camera.rotation.y = window.scrollY * 0.003;

//       const skillsBox = document.getElementById("homeskillsBox");

//       if (skillsBox) {
//         if (window.scrollY > 1500) {
//           skillsBox.style.animationName = "homeskillsBoxAnimationOn";
//         } else {
//           skillsBox.style.animationName = "homeskillsBoxAnimationOff";
//         }
//       }
//     });
//   }, [skills]);

//   return (
//     <div className="home">
//       <canvas className="homeCanvas"></canvas>

//       <div className="homeCanvasContainer">
//         <Typography variant="h1">
//           <p>D</p>
//           <p>I</p>
//           <p>S</p>
//           <p>H</p>
//           <p>A</p>
//         </Typography>

//         <div className="homeCanvasBox">
//           <Typography variant="h2">DESIGNER</Typography>
//           <Typography variant="h2">DEVELOPER</Typography>
//           <Typography variant="h2">TEACHER</Typography>
//           <Typography variant="h2">CONTENT CREATOR</Typography>
//         </div>

//         <Link to="/projects">VIEW WORK</Link>
//       </div>

//       <div className="homeScrollBtn">
//         <MouseOutlined />
//       </div>

//       <div className="homeContainer">
//         <Typography variant="h3">TIMELINE</Typography>
//         <TimeLine timelines={timelines} />
//       </div>

//       <div className="homeSkills">
//         <Typography variant="h3">SKILLS</Typography>

//         <div className="homeHeptahedronSkills">
//           {skills.image1 && (
//             <div className="homeHeptahedronSkillsFaces homeHeptahedronSkillsFace1">
//               <img src={skills.image1.url} alt="Face1" />
//             </div>
//           )}
//           {skills.image2 && (
//             <div className="homeHeptahedronSkillsFaces homeHeptahedronSkillsFace2">
//               <img src={skills.image2.url} alt="Face2" />
//             </div>
//           )}
//           {skills.image3 && (
//             <div className="homeHeptahedronSkillsFaces homeHeptahedronSkillsFace3">
//               <img src={skills.image3.url} alt="Face3" />
//             </div>
//           )}
//           {skills.image4 && (
//             <div className="homeHeptahedronSkillsFaces homeHeptahedronSkillsFace4">
//               <img src={skills.image4.url} alt="Face4" />
//             </div>
//           )}
//           {skills.image5 && (
//             <div className="homeHeptahedronSkillsFaces homeHeptahedronSkillsFace5">
//               <img src={skills.image5.url} alt="Face5" />
//             </div>
//           )}
//           {skills.image6 && (
//             <div className="homeHeptahedronSkillsFaces homeHeptahedronSkillsFace6">
//               <img src={skills.image6.url} alt="Face6" />
//             </div>
//           )}
//           {skills.image7 && (
//             <div className="homeHeptahedronSkillsFaces homeHeptahedronSkillsFace7">
//               <img src={skills.image7.url} alt="Face7" />
//             </div>
//           )}
//           {skills.image8 && (
//             <div className="homeHeptahedronSkillsFaces homeHeptahedronSkillsFace8">
//               <img src={skills.image8.url} alt="Face8" />
//             </div>
//           )}
//           {skills.image9 && (
//             <div className="homeHeptahedronSkillsFaces homeHeptahedronSkillsFace9">
//               <img src={skills.image9.url} alt="Face9" />
//             </div>
//           )}
//           {skills.image10 && (
//             <div className="homeHeptahedronSkillsFaces homeHeptahedronSkillsFace10">
//               <img src={skills.image10.url} alt="Face10" />
//             </div>
//           )}
//           {skills.image11 && (
//             <div className="homeHeptahedronSkillsFaces homeHeptahedronSkillsFace11">
//               <img src={skills.image11.url} alt="Face11" />
//             </div>
//           )}
//           {skills.image12 && (
//             <div className="homeHeptahedronSkillsFaces homeHeptahedronSkillsFace12">
//               <img src={skills.image12.url} alt="Face12" />
//             </div>
//           )}
//           {skills.image13 && (
//             <div className="homeHeptahedronSkillsFaces homeHeptahedronSkillsFace13">
//               <img src={skills.image13.url} alt="Face13" />
//             </div>
//           )}
//           {skills.image14 && (
//             <div className="homeHeptahedronSkillsFaces homeHeptahedronSkillsFace14">
//               <img src={skills.image14.url} alt="Face14" />
//             </div>
//           )}
//         </div>

//         <div className="cubeShadow"></div>

//         <div className="homeSkillsBox" id="homeskillsBox">
//           <SiCplusplus />
//           <SiReact />
//           <SiJavascript />
//           <SiMongodb />
//           <SiNodedotjs />
//           <SiExpress />
//           <SiCss3 />
//           <SiHtml5 />
//           <SiThreedotjs />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from "react";
import "./Home.css";
import Hero from "../Hero";
import { Typography } from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
import { Work } from "@mui/icons-material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';



const Home = ({ timelines = [], youtubes = [], skills = {} }) => {
  return (
    <div className="home">
      <Hero />
      <div className="homeContainer">
      <h3 className="timelineHeader">
        <Work className="mr-4" /> TIMELINE
      </h3>
      <TimeLine timelines={timelines} />
    </div>

      <div className="homeSkills">
        {/* <Typography variant="h3">SKILLS</Typography> */}
        <div class="skillsHeader">
        <FontAwesomeIcon icon={faLaptopCode} className="skillsIcon" /> SKILLS</div>
        <div className="homeCubesContainer">
          <div className="homeCubeSkills">
            {skills.image1 && (
              <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
                <img src={skills.image1.url} alt="Face1" />
              </div>
            )}
            {skills.image2 && (
              <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
                <img src={skills.image2.url} alt="Face2" />
              </div>
            )}
            {skills.image3 && (
              <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
                <img src={skills.image3.url} alt="Face3" />
              </div>
            )}
            {skills.image4 && (
              <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
                <img src={skills.image4.url} alt="Face4" />
              </div>
            )}
            {skills.image5 && (
              <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
                <img src={skills.image5.url} alt="Face5" />
              </div>
            )}
            {skills.image6 && (
              <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
                <img src={skills.image6.url} alt="Face6" />
              </div>
            )}
            {skills.image7 && (
              <div className="homeCubeSkillsFaces homeCubeSkillsFace7">
                <img src={skills.image7.url} alt="Face7" />
              </div>
            )}
            <div className="cubeShadow"></div>
          </div>

          <div className="homeCubeSkills secondCube">
            {skills.image8 && (
              <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
                <img src={skills.image8.url} alt="Face8" />
              </div>
            )}
            {skills.image9 && (
              <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
                <img src={skills.image9.url} alt="Face9" />
              </div>
            )}
            {skills.image10 && (
              <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
                <img src={skills.image10.url} alt="Face10" />
              </div>
            )}
            {skills.image11 && (
              <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
                <img src={skills.image11.url} alt="Face11" />
              </div>
            )}
            {skills.image12 && (
              <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
                <img src={skills.image12.url} alt="Face12" />
              </div>
            )}
            {skills.image13 && (
              <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
                <img src={skills.image13.url} alt="Face13" />
              </div>
            )}
            {skills.image14 && (
              <div className="homeCubeSkillsFaces homeCubeSkillsFace7">
                <img src={skills.image14.url} alt="Face14" />
              </div>
            )}
            <div className="cubeShadow"></div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Home;


