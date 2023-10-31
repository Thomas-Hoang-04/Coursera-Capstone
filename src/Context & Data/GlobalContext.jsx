import { createContext, useContext, useEffect, useState } from "react";
import { useImmer } from "use-immer";

const DataContext = createContext(null);
const SetDataContext = createContext(null);

const AvailableContext = createContext(null);
const SetAvailableContext = createContext(null);

export const useAvailable = () => useContext(AvailableContext);
export const useSetAvailable = () => useContext(SetAvailableContext);

export const useData = () => useContext(DataContext);
export const useSetData = () => useContext(SetDataContext);

export default function FormShell({ children }) {
  const [availList, setAvailList] = useImmer([]); // list of available times
  const [available, setAvailable] = useImmer({
    available: null,
    loading: false,
  });
  const [data, setData] = useImmer({
    name: "",
    email: "",
    phone: "",
    date: {
      startDate: null,
      endDate: null,
    },
    time: "",
    no_guests: "",
    occasion: "",
    special_req: "",
  });

  useEffect(() => {
    const availList = localStorage.getItem("availList");
    if (availList) {
      const availListParsed = JSON.parse(availList).filter(
        item =>
          new Date(item.time_point.split("|")[0]) >=
          new Date(new Date().toISOString().split("T")[0])
      );
      setAvailList(availListParsed);
      localStorage.setItem("availList", JSON.stringify(availListParsed));
    }
  }, []);

  useEffect(() => {
    if (
      data.date.startDate != null &&
      data.time != null &&
      data.no_guests.length > 0
    ) {
      setAvailable(draft => {
        draft.loading = true;
      });
      if (availList.length == 0) {
        const avail = Math.random() < 0.5;
        setAvailList(draft => {
          draft.push({
            time_point: `${data.date.startDate}|${data.time}|${data.no_guests}`,
            available: avail,
          });
        });
        setTimeout(() => {
          setAvailable(draft => {
            draft.available = avail;
            draft.loading = false;
          });
        }, 2000);
        localStorage.setItem("availList", JSON.stringify(availList));
      } else {
        const avail = availList.find(
          item =>
            item.time_point ==
            `${data.date.startDate}|${data.time}|${data.no_guests}`
        );
        if (avail != undefined) {
          setTimeout(() => {
            setAvailable(draft => {
              draft.available = avail.available;
              draft.loading = false;
            });
          }, 2000);
        } else {
          const avail = Math.random() < 0.5;
          setAvailList(draft => {
            draft.push({
              time_point: `${data.date.startDate}|${data.time}|${data.no_guests}`,
              available: avail,
            });
          });
          setTimeout(() => {
            setAvailable(draft => {
              draft.available = avail;
              draft.loading = false;
            });
          }, 2000);
          localStorage.setItem("availList", JSON.stringify(availList));
        }
      }
    }
  }, [data.date, data.time, data.no_guests]);

  return (
    <DataContext.Provider value={data}>
      <SetDataContext.Provider value={setData}>
        <AvailableContext.Provider value={available}>
          <SetAvailableContext.Provider value={setAvailable}>
            {children}
          </SetAvailableContext.Provider>
        </AvailableContext.Provider>
      </SetDataContext.Provider>
    </DataContext.Provider>
  );
}
