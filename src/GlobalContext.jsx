import { createContext, useContext } from "react";
import { useImmer } from "use-immer";

const DataContext = createContext(null);
const SetDataContext = createContext(null);

export const useData = () => useContext(DataContext);
export const useSetData = () => useContext(SetDataContext);

export default function FormShell({ children }) {
  const [data, setData] = useImmer({
    name: "",
    email: "",
    phone: "",
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    no_guests: 1,
    occasion: "",
    special_req: "",
  });

  return (
    <DataContext.Provider value={data}>
      <SetDataContext.Provider value={setData}>
        {children}
      </SetDataContext.Provider>
    </DataContext.Provider>
  );
}
