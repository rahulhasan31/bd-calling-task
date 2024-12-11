import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import { FaCartPlus } from "react-icons/fa6";
import { LuUserRound } from "react-icons/lu";
import Link from "next/link";

import { siteConfig } from "@/config/site";

import { GithubIcon, SearchIcon } from "@/components/icons";
import NavbarDropdown from "./NavbarDropdown";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-lg",
      }}
      endContent={
        <button className="hidden rounded-e-full text-default-100 font-semibold relative -right-4 lg:inline-block bg-orange-500 py-2 px-3  ">
          Search
        </button>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Link className="flex justify-start items-center gap-1" href="/" />
          <div>
            <img alt="img" className="h-10" src="/i.png" />
          </div>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full">
          <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        </NavbarContent>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
          <NavbarItem className="hidden sm:flex gap-2">
            <NavbarDropdown />
          </NavbarItem>
        </ul>

        <NavbarItem className="hidden sm:flex gap-2">
          <Link color="foreground" href="/cart">
            <FaCartPlus className="text-xl me-2" />
          </Link>
          <Link color="foreground" href="/login">
            <LuUserRound className="text-xl underline" />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
