import { create } from "zustand";
import type data from "./mockData.json";

type Student = typeof import("./mockData.json")["students"][number];
type State = {
  query: string;
  setQuery: (q: string)=>void;
  students: Student[];
};

export const useStore = create<State>((set)=> ({
  query: "",
  setQuery: (q)=> set({query: q}),
  students: (data as any).students
}));
