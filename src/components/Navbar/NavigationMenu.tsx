"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import SixdesignLogo from "@/icons/Sixdesign-logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import crm from "@/../public/services/crm.jpg";
import socials from "@/../public/services/social.webp";
import mls from "@/../public/services/mls.jpeg";
import email from "@/../public/services/email.png";
import landing from "@/../public/services/landing.jpg";
import custom from "@/../public/services/custom.jpg";
import Image from "next/image";

const components: { title: string; href: string; description: any }[] = [
  {
    title: "CRM for agents",
    href: "/services/crm",
    description: crm,
  },
  {
    title: "Social Media Marketing",
    href: "/services/socials",
    description: socials,
  },
  {
    title: "MLS Website Design",
    href: "/services/mls",
    description: mls,
  },
  {
    title: "Email Marketing",
    href: "/services/email",
    description: email,
  },
  {
    title: "Landing Page",
    href: "/services/landing",
    description: landing,
  },
  {
    title: "Custom Solutions",
    href: "/services/custom",
    description: custom,
  },
];

export function NavigationMenuDemoz() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger  className="text-lg">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[400px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  className="flex justify-start flex-col"
                >
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
