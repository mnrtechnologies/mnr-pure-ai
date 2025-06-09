// components/ListItem.jsx
import React from "react";
import { NavigationMenuLink } from "../../ui/navigationmenu";
import { cn } from "../../../lib/utils";

export const ListItem = React.forwardRef(
  ({ className, title, href, icon: Icon, children }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            href={href}
            className={cn(
              "flex items-start gap-4 rounded-lg p-3 text-left no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800",
              className
            )}
          >
            <Icon className="h-6 w-6 shrink-0 text-blue-400 mt-1" aria-hidden="true" />
            <div>
              <div className="text-md font-semibold leading-snug text-white">{title}</div>
              <p className="text-sm leading-tight text-slate-400">{children}</p>
            </div>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
