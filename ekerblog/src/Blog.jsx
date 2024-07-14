import { useDispatch } from "react-redux";
import Heroes from "./components/blogComponents/Heroes";
import Skills from "./components/blogComponents/Skills";
import { getSkills } from "./store/actions";
import { useEffect } from "react";
import Profile from "./components/blogComponents/Profile";
import Projects from "./components/blogComponents/Projects";
import { useTranslation } from "react-i18next";

function Blog() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSkills());
  }, []);

  return (
    <>
      <Heroes />
      <Skills />
      <Profile />
      <Projects />
    </>
  );
}

export default Blog;
