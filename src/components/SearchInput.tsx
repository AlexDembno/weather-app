"use client";

import { useState, useEffect } from "react";
import { useDebouncedValue } from "@/hooks/useDebounce";

export const SearchInput = ({
  className,
  setSearchCity,
  successTrigger,
  loading = false,
}: {
  className?: string;
  setSearchCity: React.Dispatch<React.SetStateAction<string>>;
  successTrigger: boolean;
  loading?: boolean;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebouncedValue(searchTerm, 1000);

  useEffect(() => {
    if (debouncedSearchTerm.trim().length >= 3) {
      setSearchCity(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, setSearchCity]);

  useEffect(() => {
    setSearchTerm("");
  }, [successTrigger]);

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a city"
        className={`w-full px-4 py-3 pr-10 rounded-xl outline-none ${className}`}
      />

      {loading && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <div
            className="
              w-5 h-5 rounded-full animate-spin
              border-2 border-t-transparent
              border-gray-800 dark:border-white
            "
          ></div>
        </div>
      )}
    </div>
  );
};
