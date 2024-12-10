import React from "react";

import AccountSetting from "@/components/setting/AccountSetting";
import Billing from "@/components/setting/Billing";
import ChangePass from "@/components/setting/ChangePass";

export default function Setting() {
  return (
    <div>
      <AccountSetting />
      <Billing />
      <ChangePass />
    </div>
  );
}
