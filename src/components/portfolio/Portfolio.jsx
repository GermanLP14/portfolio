import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items = [
  {
    id: 1,
    title: "Censo 2023",
    img: "Censo 2023.png",
    desc: "Frontend development that simulates Uruguay's census. I used technologies such as HTML, CSS and React to create an intuitive and accessible user interface that made it easy for citizens to participate in the census.",
    url: "https://censouruguay.netlify.app"
  },
  {
    id: 2,
    title: "Api Marvel",
    img: "Api marvel.png",
    desc: "In this frontend project, I developed a web application that interacts with the Marvel API to display a gallery of various comic book characters. Used HTML to structure the page, CSS for layout and styling, and JavaScript to make API requests and dynamically display the characters",
    url: "https://germanlp14.github.io/Api-Marvel/index.html"
  },
  {
    id: 3,
    title: "A Day To Remember",
    img: "A day to remember.png",
    desc: "In this project, I designed a website inspired by the band A Day to Remember using HTML and CSS. The page features a professional and attractive design that reflects the aesthetics and energy of the band. I incorporated striking visual elements, such as images(art) of the band and albums, along with a dynamic color palette that highlights the band's identity.",
    url: "https://germanlp14.github.io/A-Day-To-Remember/index.html"
  },
  {
    id: 4,
    title: "Bienes Raices",
    img: "bienesRaices.png",
    desc: "This page is one of my first projects working with HTML and CSS. It represents a real estate page divided into sections providing information through a simple but modern design.",
    url: "https://wonderful-bartik-24e60a.netlify.app/"
  },
  {
    id: 5,
    title: "Blog Café",
    img: "cafe.png",
    desc: "Using HTML and CSS I carried out this work that represents a page/blog that is about coffee and its different uses. Simple and minimalist but attractive design that, combined with a color palette, transmits the essence of coffee.",
    url: "https://heuristic-albattani-42658b.netlify.app/"
  },
  {
    id: 6,
    title: "FrontEnd Store",
    img: "store.png",
    desc: "Simple project which represents a thematic store for developers. Focusing on a simple and friendly interface, I used striking colors and clear images that can attract new users.",
    url: "https://eager-payne-908c31.netlify.app/"
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
            <a className="button" href={item.url} target="_blank">See Demo</a>
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
