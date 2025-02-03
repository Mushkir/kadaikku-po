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
      const response = await fetch(
        "http://192.168.1.7:8080/api/v1/get-all-lists",
        {
          method: "GET",
        }
      );

      const respData = await response.json();
      setListItems(respData?.data || []);
    } catch (error) {
      console.error(error);
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
