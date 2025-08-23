"use client";

import { useState, useEffect } from "react";
import { useDebouncedValue } from "@/hooks/useDebounce";

export const SearchInput = ({
  setSearchCity,
}: {
  setSearchCity: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebouncedValue(searchTerm, 500);

  useEffect(() => {
    console.log("debouncedSearchTerm", debouncedSearchTerm);
    if (debouncedSearchTerm.length > 3) {
      setSearchCity(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, setSearchCity]);

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search for a city"
    />
  );
};
