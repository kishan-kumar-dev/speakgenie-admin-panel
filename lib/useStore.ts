import { create } from "zustand";
import data from "./mockData.json"; // ✅ normal import (not type-only)

type Student = (typeof data)["students"][number];

type State = {
  query: string;
  setQuery: (q: string) => void;
  students: Student[];
};

export const useStore = create<State>((set) => ({
  query: "",
  setQuery: (q) => set({ query: q }),
  students: data.students,
}));
