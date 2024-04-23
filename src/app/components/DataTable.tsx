"use client";

import { useState } from "react";
import DeleteDialog from "./DeleteDialog";

interface Row {
  id: number;
  [x: string | number | symbol]: any;
}

export default function DataTable({ data }: { data: Row[] }) {
  const [rows, setRows] = useState(data);

  const headers = Object.keys(rows[0]);

  function handleDelete(rowId: number) {
    setRows(rows.filter((row) => row.id !== rowId));
  }

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            {Object.values(row).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
            <td>
              <DeleteDialog onConfirm={() => handleDelete(row.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
