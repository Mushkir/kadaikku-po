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
      const response = await fetch(
        "https://kadaikku-po.vercel.app/get-all-lists",
        { method: "GET" }
      );

      const textData = await response.text();
      console.log("API Response Text:", textData);

      const respData = JSON.parse(textData);
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
