/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./About.scss";
// import { images } from "../../constants";
import { client, urlFor } from "../../client";
import { AppWrap } from "../../wrapper";

const About = () => {
  // const abouts=[
  //   {
  //     title:'Web development',
  //     description:'I am a good dev',
  //     imgUrl:images.about01
  //   },
  //   {
  //     title:'Web development',
  //     description:'I am a good dev',
  //     imgUrl:images.about02
  //   },
  //   {
  //     title:'Web development',
  //     description:'I am a good dev',
  //     imgUrl:images.about03
  //   }
  // ]

  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = `*[_type=="abouts"]`;

    client.fetch(query).then((data) => {
      setAbouts(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Dev</span>
        <br /> means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            key={about.title + index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item">
            <img
              src={urlFor(about.imgUrl).width(200).url()}
              alt={about.title}
            />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, "about");
