import { ReactNode } from "react";

export type Identity = string | number;

export interface TableRow {
    id: Identity;
    [prop: string]: any;
}

export interface TableColumn<T extends TableRow> {
    label: string;
    renderCell: (item: T) => ReactNode;
}

export interface TableProps<T extends TableRow> {
    data: T[];
    columns: TableColumn<T>[];
}
