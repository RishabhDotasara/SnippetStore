import { useState, useEffect } from "react";

import { useAPI } from "./useAPI";
import toast from "react-hot-toast";
import { Snippet } from "@rishabhdotasara/snippetstore-types";

export const useRecommendations = (query: string) => {
  const [recommendations, setRecommendations] = useState<Snippet[]>([]);
  const [loading, setLoading] = useState(false);
  const { makeRequest } = useAPI();

  const getRecommendations = async () => {
    if (query.length < 2) {
      setRecommendations([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    const res = await makeRequest(
      `/search/recommendations?q=${query}`,
      "GET",
      {},
      false
    );
    console.log(res)

    if(!res)
    {
      toast.error("Error Fetching Recommendations, Please try again!");
      setLoading(false);
      return;
    }

    //extract the recommendations
    console.log(res);
    if (res.length === 0) {
      setRecommendations([]);
      setLoading(false);
      return;
    }
    const recommendations = (res.recommendations as any[]).map(
      (rec) => rec._source
    );
    setRecommendations(recommendations);
    console.log(recommendations);
    setLoading(false);
  };

  useEffect(() => {
    if (query.length < 2) {
      setRecommendations([]);
      return;
    }
  }, [query]);

  return { recommendations, loading, getRecommendations, setRecommendations };
};
