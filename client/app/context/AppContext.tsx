import { createContext, ReactNode, useEffect, useState } from "react";
import { API_URI } from "../../API_URI";

interface AppContextType {
  listItems: any[];
  getAllList: () => void;
}

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [listItems, setListItems] = useState<any[]>([]);

  const getAllLists = async () => {
    try {
      // const response = await fetch(API_URI + "/get-all-lists", {
      const response = await fetch(
        "https://kadaikku-po.vercel.app/get-all-lists",
        {
          credentials: "include",
          method: "GET",
        }
      );

      const respData = await response.json();
      console.log(respData);

      setListItems(respData?.data || []);
    } catch (error) {
      console.error("Error fetching or parsing data:", error);
    }
  };

  useEffect(() => {
    getAllLists();
  }, []);

  return (
    <AppContext.Provider value={{ listItems, getAllList: getAllLists }}>
      {children}
    </AppContext.Provider>
  );
};
