import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Link, useLocation } from "react-router-dom";

import OnlineIcon from "../../images/Icons/Laptop with cursor.png";
import OnsiteIcon from "../../images/Icons/Meeting Room.png";
import ConsultingIcon from "../../images/Icons/Training.png";

const tabs = [
  {
    label: "Online Training",
    value: "online",
    icon: <img src={OnlineIcon} className="h-4 w-4" alt="Online" />,
    href: "/services/online-training",
  },
  {
    label: "Onsite Training",
    value: "onsite",
    icon: <img src={OnsiteIcon} className="h-4 w-4" alt="Onsite" />,
    href: "/services/onsite-training",
  },
  {
    label: "Consulting",
    value: "consulting",
    icon: <img src={ConsultingIcon} className="h-4 w-4" alt="Consulting" />,
    href: "/services/consulting",
  },
];

const ServiceNavTabs = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Tabs defaultValue={tabs.find(t => currentPath.includes(t.value))?.value || "online"}>
      <TabsList className="fixed top-20 left-0 right-0 z-50 flex flex-nowrap overflow-x-auto whitespace-nowrap items-center justify-start sm:justify-center gap-4 md:gap-10 bg-white p-2 rounded-xl border">
  {tabs.map((tab) => (
    <TabsTrigger
      key={tab.value}
      value={tab.value}
      className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition whitespace-nowrap ${
        currentPath === tab.href
          ? "bg-[#f5f5f5] text-red-800"
          : "text-gray-600 hover:text-red-600"
      }`}
      asChild
    >
      <Link to={tab.href}>
        {tab.icon} {tab.label}
      </Link>
    </TabsTrigger>
  ))}
</TabsList>

    </Tabs>
  );
};

export default ServiceNavTabs;