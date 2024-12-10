"use client";
import { NavbarMenuToggle } from "@nextui-org/navbar";
import Link from "next/link";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar for Desktop and Tablet */}
      <aside
        className={`fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60 transition-all duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-60"
        } md:translate-x-0`}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="px-4 py-6 text-center border-b">
              <h1 className="text-xl font-bold leading-none">
                <span className="text-yellow-700">Task Manager</span> App
              </h1>
            </div>
            <nav className="p-4">
              <ul className="space-y-1">
                <li>
                  <Link
                    className="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4"
                    href="/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4"
                    href="/order-history"
                  >
                    Order History
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="p-4">
            <button
              type="button"
              className="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
            >
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Hamburger Menu for Mobile */}
      <button
        className="md:hidden fixed top-14 left-4 z-50 p-2  text-white rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <div>
            <IoIosMenu className="bg-slate-500" />{" "}
          </div>
        ) : (
          <div>
            <IoIosMenu className="bg-slate-500" />{" "}
          </div>
        )}
      </button>
    </>
  );
}
