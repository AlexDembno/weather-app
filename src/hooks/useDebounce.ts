"use client";

import { useState, useEffect } from "react";

export function useDebouncedValue(value: string, wait: number = 500) : string {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebouncedValue(value), wait);
    return () => clearTimeout(id);
  }, [value, wait]);

  return debouncedValue;
}