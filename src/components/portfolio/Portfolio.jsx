import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Censo 2023",
    img: "./public/Censo 2023.png",
    desc: "Desarrollo frontend que simula el censo de Uruguay. Utilicé tecnologías como HTML, CSS y React para crear una interfaz de usuario intuitiva y accesible que facilitara la participación de los ciudadanos en el censo.",
  },
  {
    id: 2,
    title: "Api Marvel",
    img: "./public/Api marvel.png",
    desc: "En este proyecto de frontend, desarrollé una aplicación web que interactúa con la API de Marvel para mostrar una galería de diversos personajes de cómics. Utilicé HTML para estructurar la página, CSS para el diseño y estilizado, y JavaScript para realizar solicitudes a la API y mostrar dinámicamente los personajes",
  },
  {
    id: 3,
    title: "A Day To Remember",
    img: "./public/A day to remember.png",
    desc: "En este proyecto, diseñé una página web inspirada en la banda A Day to Remember utilizando HTML y CSS. La página presenta un diseño profesional y atractivo que refleja la estética y la energía de la banda. Incorporé elementos visuales llamativos, como imágenes(arte) de la banda y álbumes, junto con una paleta de colores dinámica que resalta la identidad de la banda.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
