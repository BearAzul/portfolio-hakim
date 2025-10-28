import { HardSkills, SoftSkills } from "../common/MySkills/MySkills.jsx";
import apiClient from "../api.js";
import { useState, useEffect, useCallback } from "react";

const Skills = () => {
  const [hardSkills, setHardSkills] = useState([]);
  const [softSkills, setSoftSkills] = useState([]);

  const getSkills = useCallback(async () => { 
    try {
      const response = await apiClient.get("/skills");
      const allSkills = response.data;

      setHardSkills(allSkills.filter(skill => skill.type === 'Hard'));
      setSoftSkills(allSkills.filter(skill => skill.type === 'Soft'));
      
    } catch (error) {
      console.error("Error fetching skills data:", error);
    }
  },[])

  useEffect(() => { 
    getSkills()
  }, [getSkills])
  
  
  return (
    <section
      id="skills"
      className="transition-all bg-gray-100 dark:bg-slate-800 flex items-center justify-center lg:min-h-screen min-h-[auto] py-20 lg:py-0 w-full overflow-hidden"
    >
      <div className="container px-6 mx-auto space-y-10 md:max-w-2xl lg:max-w-5xl">
        <div className="text-center title">
          <h1 className="text-xl font-semibold md:text-3xl text-slate-800 dark:text-gray-100">
            Kemampuan
          </h1>
          <p className="text-xs text-teal-600 md:text-sm">
            Level saya secara teknis
          </p>
        </div>
        <div className="flex flex-col gap-2 lg:gap-6">
          <HardSkills animate="fade-right" skills={hardSkills} />
          <SoftSkills animate="fade-left" skills={softSkills} />
        </div>
      </div>
    </section>

  );
};

export default Skills;
