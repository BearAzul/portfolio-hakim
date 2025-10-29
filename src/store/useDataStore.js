import { create } from "zustand";
import apiClient from "../api.js";

export const useDataStore = create((set, get) => ({
  profiles: {},
  about: {},
  educations: [],
  experiences: [],
  projects: [],
  skills: {
    hardSkills: [],
    softSkills: [],
  },
  isLoading: false,

  fetchAllData: async () => {
    set({ isLoading: true });
    try {
      const [profileRes, aboutRes, eduRes, expRes, projectRes, skillRes] =
        await Promise.all([
          apiClient.get("/profile"),
          apiClient.get("/about"),
          apiClient.get("/educations"),
          apiClient.get("/experiences"),
          apiClient.get("/projects"),
          apiClient.get("/skills"),
        ]);

      const allSkills = skillRes.data;
      const hardSkills = allSkills.filter((skill) => skill.type === "Hard");
      const softSkills = allSkills.filter((skill) => skill.type === "Soft");

      set({
        profiles: profileRes.data,
        about: aboutRes.data,
        educations: eduRes.data,
        experiences: expRes.data,
        projects: projectRes.data.data,
        skills: { hardSkills, softSkills },
        isLoading: false,
      });
    } catch (error) {
      console.error("Error fetching all data:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  refreshProjects: async () => {
    set({ isLoading: true });
    try {
      const response = await apiClient.get("/projects");
      set({ projects: response.data });
    } catch (error) {
      console.error("Error refreshing projects:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
