"use client";

import { useTheme } from "next-themes";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/ui/DropdownMenu";
import Button from "@/ui/Button";
import Icons from "@/components/Icons";
import Boop from "../boop/Boop";

interface ThemeToggleProps {}

const ThemeToggle: React.FC<ThemeToggleProps> = ({}) => {
  const { setTheme } = useTheme();
  return (
    <div title="Theme">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            <Boop rotation={20} timing={200}>
              <Icons.Sun className="rotate-0 scale-100 transition-all text-slate-900 hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100" />
              <Icons.Moon className="absolute top-0 rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100" />
            </Boop>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" forceMount>
          <DropdownMenuItem onClick={() => setTheme("light")}>
            <Icons.Sun className="mr-2 h-4 w-4" />
            <span>Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            <Icons.Moon className="mr-2 h-4 w-4" />
            <span>Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            <Icons.Laptop className="mr-2 h-4 w-4" />
            <span>System</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ThemeToggle;
