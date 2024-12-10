"use client";
import Profile from "@/components/User/Profile";
import RecetOrderHistory from "@/components/User/RecetOrderHistory";
import React from "react";

export default function Dashboard() {
  return (
    <div>
      <Profile />
      <RecetOrderHistory />
    </div>
  );
}
