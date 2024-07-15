import React from "react";
import { useTranslation } from "react-i18next";
import Projectscontext from "./Projectscontext";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "./Footer";

function Projects() {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const { i18n } = useTranslation();

  useEffect(() => {
    const loadProjects = async () => {
      if (i18n.isInitialized) {
        const loadedProjects = t("datas", { returnObjects: true });
        if (Array.isArray(loadedProjects)) {
          setProjects(loadedProjects);
        } else {
          console.error(
            "Projeler yüklenemedi, veri formatı hatalı:",
            loadedProjects
          );
        }
      } else {
        const handleReady = () => {
          const loadedProjects = t("datas", { returnObjects: true });
          if (Array.isArray(loadedProjects)) {
            setProjects(loadedProjects);
          } else {
            console.error(
              "Projeler yüklenemedi, veri formatı hatalı:",
              loadedProjects
            );
          }
        };

        i18n.on("initialized", handleReady);
        return () => i18n.off("initialized", handleReady);
      }
    };

    loadProjects();
  }, [i18n, t]);

  return (
    <div className="h-[1759px] w-full bg-[#FFFFFF] dark:bg-[#484148] flex flex-col items-center justify-center gap-36">
      <div className="flex flex-col justify-center items-center">
        <h1 className="">{t("projects")}</h1>
        <div className="w-[1418.67px] h-[1056px] flex gap-[5rem] justify-center items-center">
          {projects.map((item, index) => (
            <Projectscontext key={index} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
