import { createContext, ReactNode, useEffect, useState } from "react";

interface AppContextType {
  listItems: any[];
  getAllList: () => void;
}

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [listItems, setListItems] = useState<any[]>([]);

  const getAllLists = async () => {
    try {
      const response = await fetch(``, {
        credentials: "include",
        method: "GET",
      });

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
