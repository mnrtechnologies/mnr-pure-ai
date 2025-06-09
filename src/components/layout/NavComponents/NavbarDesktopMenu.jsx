// components/NavbarDesktopMenu.jsx
import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,

} from "../../../components/ui/navigationmenu";
import {navLinks} from "../../../components/layout/NavComponents/navLinks"
import {ListItem} from "../../../components/layout/NavComponents/ListItem"
export function NavbarDesktopMenu() {
  return (
    <div className="hidden md:flex flex-1 justify-center border-slate-300">
      <NavigationMenu>
        <NavigationMenuList>
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.label}>
              <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-white focus:text-white hover:bg-blue-700 focus:bg-blue-700 border-slate-300 ">
                {link.label}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col w-[350px] p-1.5 bg-gray-900 rounded-xl shadow-2xl border-slate-100">
                  {link.dropdownContent.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                      icon={item.icon}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
