"use client";

import { useState } from "react";
import styles from "./DataTable.module.css";
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
    <table className={styles.table}>
      <thead>
        <tr className={styles.tr}>
          {headers.map((header, index) => (
            <th className={styles.th} key={index}>{header}</th>
          ))}
          <th className={styles.th}></th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr className={styles.tr} key={row.id}>
            {Object.values(row).map((value, index) => (
              <td className={styles.td} key={index}>{value}</td>
            ))}
            <td className={styles.td}>
              <DeleteDialog onConfirm={() => handleDelete(row.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
