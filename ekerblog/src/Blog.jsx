import Heroes from "./components/blogComponents/Heroes";
import Skills from "./components/blogComponents/Skills";
import Profile from "./components/blogComponents/Profile";
import Projects from "./components/blogComponents/Projects";
import { useSelector } from "react-redux";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
function Blog() {
  const darkMode = useSelector((store) => store.darkMode);

  useEffect(() => {
    toast.success(
      `Merhaba ${localStorage.getItem("name")}, beni tanıtan siteme hoşgeldin!`,
      {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      }
    );
  }, []);

  return (
    <div className={darkMode ? "" : "dark"}>
      <div className="text-[#000000] dark:text-[#FFFFFF] w-[100%]">
        <Heroes />
        <Skills />
        <Profile />
        <Projects />
        <ToastContainer />
      </div>
    </div>
  );
}

export default Blog;
