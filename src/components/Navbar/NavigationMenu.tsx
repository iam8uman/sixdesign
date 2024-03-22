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
        {/* about
        <NavigationMenuTrigger className="bg-transparent text-lg">
          Services
        </NavigationMenuTrigger> */}
        <NavigationMenuItem>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <SixdesignLogo />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      SixDesign
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Software Solution of Business Process including CRM, Email
                      Marketing
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-lg">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  className="flex justify-start flex-col"
                >
                  <Image
                    height={40}
                    width={40}
                    src={component.description}
                    alt={component.title}
                  />
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
