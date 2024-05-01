"use client"

import Table from "./components/Table";
import data from "./data.json";
import { TableRow } from "./types/table";

export default async function Home() {

  const COLUMNS = [
    {
      label: "Name",
      renderCell: <T extends TableRow>(item: T) => item.name,
    },
    {
      label: "Active",
      renderCell: <T extends TableRow>(item: T) => item.isActive ? "Active" : "Inactive",
    },
    {
      label: "Balance",
      renderCell: <T extends TableRow>(item: T) => item.balance,
    },
    {
      label: "Picture",
      renderCell: <T extends TableRow>(item: T) => item.picture,
    },
    {
      label: "Age",
      renderCell: <T extends TableRow>(item: T) => item.age,
    },
    {
      label: "Eye Color",
      renderCell: <T extends TableRow>(item: T) => item.eyeColor,
    },
    {
      label: "Gender",
      renderCell: <T extends TableRow>(item: T) => item.gender,
    },
    {
      label: "Company",
      renderCell: <T extends TableRow>(item: T) => item.company,
    },
    {
      label: "Email",
      renderCell: <T extends TableRow>(item: T) => item.email,
    },
    {
      label: "Phone",
      renderCell: <T extends TableRow>(item: T) => item.phone,
    }
  ];

  return (
    <main>
      <Table data={data} columns={COLUMNS} />
    </main>
  );
}
