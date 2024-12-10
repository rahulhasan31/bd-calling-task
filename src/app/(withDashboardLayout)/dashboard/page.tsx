"use client";
import React from "react";

import Profile from "@/components/User/Profile";
import RecetOrderHistory from "@/components/User/RecetOrderHistory";

export default function Dashboard() {
  return (
    <div>
      <Profile />
      <RecetOrderHistory />
    </div>
  );
}
