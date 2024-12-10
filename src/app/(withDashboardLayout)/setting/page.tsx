import AccountSetting from "@/components/setting/AccountSetting";
import Billing from "@/components/setting/Billing";
import ChangePass from "@/components/setting/ChangePass";
import React from "react";

export default function Setting() {
  return (
    <div>
      <AccountSetting />
      <Billing />
      <ChangePass />
    </div>
  );
}
