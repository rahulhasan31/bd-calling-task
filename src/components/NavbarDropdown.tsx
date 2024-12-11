"use client";

import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";

export default function NavbarDropdown() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };
  return (
    <>
      <Dropdown>
        <DropdownTrigger>All Category </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem
            onClick={() => handleNavigation("/dashboard")}
            key="new3"
          >
            Dashboard
          </DropdownItem>

          <DropdownItem onClick={() => handleNavigation("/item")} key="new2">
            Item
          </DropdownItem>

          <DropdownItem
            onClick={() => handleNavigation("/restaurant")}
            key="new1"
          >
            Restaurant
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
