"use client";

import { useState } from "react";

import { Identity, TableRow, TableProps } from "../types/table";

import styles from "./Table.module.css";
import DeleteDialog from "./DeleteDialog";

export default function Table<T extends TableRow>({ data, columns }: TableProps<T>) {
  const [rows, setRows] = useState(data);

  function handleDelete(rowId: Identity) {
    setRows(rows.filter((row) => row.id !== rowId));
  }

  return (
    <table className={styles["table"]}>
      <thead>
        <tr className={styles["table-row"]}>
          {columns.map((column, index) => (
            <th className={styles["table-header"]} key={index}>{column.label}</th>
          ))}
          <th className={styles["table-header"]}></th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr className={styles["table-row"]} key={row.id}>
            {columns.map((column, index) => (
              <td className={styles["table-data"]} key={index}>{column.renderCell(row)}</td>
            ))}
            <td className={styles["table-data"]}>
              <DeleteDialog onConfirm={() => handleDelete(row.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
