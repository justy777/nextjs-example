"use client";

import { useState } from "react";

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
          {headers.map((header) => (
            <th key={header}>{header}</th>
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
              <button onClick={() => handleDelete(row.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
