import { createContext, useContext } from "react";

const store = createContext();

export const useResultContext = () => useContext(store);
export default store;
