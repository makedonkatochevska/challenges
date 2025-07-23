import { useEffect, useState } from "react";

interface UseFetchReturnI<T> {
  data: T | null;
  loading: boolean;
  error: string;
}

export const useFetch = <T,>(url: string): UseFetchReturnI<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(url);
        const data: T = await response.json();
        setData(data);
      };
      fetchData();
    } catch (e) {
      setError(
        e instanceof Error ? e.message : "An error occurred while fetching data"
      );
    } finally {
      setLoading(false);
    }
  }, [url]);

  return { data, loading, error };
};
