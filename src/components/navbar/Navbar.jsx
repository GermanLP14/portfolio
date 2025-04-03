import "./navbar.scss";
import {motion} from "framer-motion"
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
        {/* sidebar */}
        <Sidebar />
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} 
                            animate={{opacity:1, scale:1}}
                            transition={{duration:0.5}}>
            </motion.span>
            <div className="social">
                <a href="https://github.com/GermanLP14" target="_blank"><img src="/github.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/german-laurito-997684190/" target="_blank"><img src="/linkedin.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar