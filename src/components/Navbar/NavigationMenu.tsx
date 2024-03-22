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

const components: { title: string; href: string; description: string }[] = [
  {
    title: "CRM for agents",
    href: "/services/crm",
    description:
      "Elevate client satisfaction with our real estate CRM. Efficiently manage leads and personalized communication for seamless transactions and lasting relationships.",
  },
  {
    title: "Social Media Marketing",
    href: "/services/socials",
    description:
      "Maximize your online presence with our expert social media management. Engage, grow, and build brand authority across platforms effortlessly.",
  },
  {
    title: "MLS Website Design",
    href: "/services/mls",
    description:
      "We specialize in creating MLS websites for real estate professionals. Our solutions offer seamless property listings integration, advanced search functionality, interactive maps, and customizable property details. ",
  },
  {
    title: "Email Marketing",
    href: "/services/email",
    description:
      "Email marketing is a great way to directly converse with your customers. We deliver targeted email marketing solutions to drive engagement and conversions.",
  },
  {
    title: "Landing Page",
    href: "/services/landing",
    description:
      "Capture attention and drive conversions with captivating landing pages. Tailored designs, compelling content, and seamless user experience for optimal engagement and lead generation.",
  },
  {
    title: "Custom Solutions",
    href: "/services/custom",
    description:
      "Unlock your business &apos s full potential with our bespoke custom solutions. Tailored to your unique needs, we deliver innovative, efficient, and scalable results",
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
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
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
