"use client";

import { useState, useEffect } from "react";
import { useDebouncedValue } from "@/hooks/useDebounce";

export const SearchInput = ({
  setSearchCity,
  successTrigger,
}: {
  setSearchCity: React.Dispatch<React.SetStateAction<string>>;
  successTrigger: boolean;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebouncedValue(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm.trim().length >= 3) {
      setSearchCity(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, setSearchCity]);

  useEffect(() => {
    setSearchTerm("");
  }, [successTrigger]);

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search for a city"
    />
  );
};
