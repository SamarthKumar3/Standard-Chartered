"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center gap-10 justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">nav</p>
    </div>
  );
}

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-5 text-sm">
            <HoveredLink href="/web-dev">Account details</HoveredLink>
            <HoveredLink href="/interface-design">Chatbot</HoveredLink>
            <HoveredLink href="/seo">Transaction types</HoveredLink>
            <HoveredLink href="/branding">Log out</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Guide">
          <div className="flex flex-col space-y-5 text-sm">
            <HoveredLink href="/web-dev">How to signup?</HoveredLink>
            <HoveredLink href="/interface-design">Required docs</HoveredLink>
            <HoveredLink href="/seo">Network check</HoveredLink>
            <HoveredLink href="/branding">How to generate m-pin?</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="KYC info">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Bank details"
              description="Your bank name and starting date of the passbook."
              href="/"
            />
            <ProductItem
              title="Address proof"
              description="Upload your latest address proof both sides clearly."
              href="/"
            />
            <ProductItem
              title="Signature"
              description="Verify your signature with the original one in the official portal"
              href="/"
            />
            <ProductItem
              title="Photo id"
              description="Respond and have a seamless experience with our new facial recognition AI "
              href="/"
            />
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
export { MenuItem };
