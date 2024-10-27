"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <Sun className="h-5 w-5 transition-transform duration-300 ease-in-out dark:rotate-180 dark:opacity-0 dark:scale-50" />
          <Moon className="absolute h-5 w-5 transform rotate-180 scale-50 opacity-0 transition-transform duration-300 ease-in-out dark:rotate-0 dark:opacity-100 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md p-2"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="flex items-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-lg"
        >
          <Sun className="h-4 w-4 text-yellow-500" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="flex items-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-lg"
        >
          <Moon className="h-4 w-4 text-blue-500" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="flex items-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-lg"
        >
          <Sun className="h-4 w-4 text-gray-400 dark:text-gray-500" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
