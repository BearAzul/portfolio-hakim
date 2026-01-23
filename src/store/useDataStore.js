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
  certificates: [],
  totalPages: 1,
  totalData: 0,
  isLoading: false,
  isCertLoading: false,

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
        projects: projectRes.data,
        skills: { hardSkills, softSkills },
      });
    } catch (error) {
      console.error("Error fetching all data: ", error);
    } finally {
      set({ isLoading: false });
    }
  },

  fetchCertificates: async (page = 1, level = "Semua", search="") => {
    set({ isCertLoading: true });
    try {
      const params = { page };
      if (level !== "Semua") params.level = level;
      if (search) params.search = search;

      const response = await apiClient.get("/certificates", { params });

      set({
        certificates: response.data.data,
        totalPages: response.data.pagination.totalPages,
        totalData: response.data.pagination.totalData,
      });
    } catch (error) {
      console.error("Error fetching certificates: ", error);
    } finally {
      set({ isCertLoading: false });
    }
  },

  refreshProjects: async () => {
    set({ isLoading: true });
    try {
      const response = await apiClient.get("/projects");
      set({ projects: response.data });
    } catch (error) {
      console.error("Error refreshing projects: ", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
