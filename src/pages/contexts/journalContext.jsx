import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const JournalContext = createContext(null);

export const JournalProvider = ({ children }) => {
  const [journals, setJournals] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  const fetchJournals = async () => {
    try {
      const res = await axios.get(`${API_URL}/journals`);
      if (res.data.success) {
        setJournals(res.data.data);
      }
    } catch (err) {
      console.error("❌ Failed to fetch journals:", err);
    }
  };

  useEffect(() => {
    fetchJournals();
  }, []);

  return (
    <JournalContext.Provider value={{ journals, fetchJournals }}>
      {children}
    </JournalContext.Provider>
  );
};

export const useJournal = () => useContext(JournalContext);
