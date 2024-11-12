import React from "react";
import DashboardCard from "./components/DashboardCard";

const data = [
  {
    title: "MultiStrategy Vaults",
  },
  {
    title: "Social Credit Delegation Platform",
  },
  {
    title: "Account Abstraction Wallet",
  },
  {
    title: "Gasless Transactions",
  },
  {
    title: "PortFolio management",
  },
  {
    title: "Interactive UI",
  },
];
function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-3">
        {data.map((item) => (
          <DashboardCard title={item.title} desc={item.desc} />
        ))}
      </div>
    </>
  );
}

export default Dashboard;
