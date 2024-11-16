"use client";
import { Draw } from "@/types";
import React, { createContext, useState } from "react";

export interface DrawContextType {
  selectedDraw?: Draw;
}

const DrawContext = createContext<DrawContextType | undefined>(undefined);

export function DrawProvider({ children }: { children: React.ReactNode }) {
  const [draw, setDraw] = useState<Draw | undefined>();

  return (
    <DrawContext.Provider
      value={{
        selectedDraw: draw,
        selectDraw: setDraw,
      }}
    >
      {children}
    </DrawContext.Provider>
  );
}

export function useDraw() {
  const context = React.useContext(DrawContext);
  if (context === undefined) {
    throw new Error("useDraw must be used within a DrawProvider");
  }
  return context;
}
