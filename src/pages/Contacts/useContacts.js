import { useState, useEffect } from "react";

export const useContacts = () => {
  const initialState = [];
  const [data, setData] = useState(initialState);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const getContacts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://randomuser.me/api/?results=200");
        const { results, error } = await response.json();
        if (error) {
          throw new Error(error);
        }
        setData(results);
        setError(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getContacts();
  }, []);
  return {
    data,
    isLoading,
    isError,
  };
};
