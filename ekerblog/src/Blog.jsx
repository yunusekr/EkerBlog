import Heroes from "./components/blogComponents/Heroes";
import Skills from "./components/blogComponents/Skills";
import Profile from "./components/blogComponents/Profile";
import Projects from "./components/blogComponents/Projects";
import { useSelector } from "react-redux";

function Blog() {
  const darkMode = useSelector((store) => store.darkMode);
  return (
    <div className={darkMode ? "" : "dark"}>
      <div className="text-[#000000] dark:text-[#FFFFFF]">
        <Heroes />
        <Skills />
        <Profile />
        <Projects />
      </div>
    </div>
  );
}

export default Blog;
