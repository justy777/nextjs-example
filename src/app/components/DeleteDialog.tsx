import { MouseEventHandler } from "react";
import styles from "./DeleteDialog.module.css";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

interface ConfirmationModalProps {
    onConfirm: MouseEventHandler<HTMLButtonElement>;
}

export default function DeleteDialog({ onConfirm }: ConfirmationModalProps) {
    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
                <button>Delete</button>
            </AlertDialog.Trigger>
            <AlertDialog.Portal>
                <AlertDialog.Overlay/>
                <AlertDialog.Content className={styles["modal"]}>
                    <AlertDialog.Title>Delete</AlertDialog.Title>
                    <AlertDialog.Description>
                        Are you sure you want to delete? This action cannot be undone.
                    </AlertDialog.Description>
                    <AlertDialog.Cancel asChild>
                        <button>Cancel</button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action asChild>
                        <button onClick={onConfirm}>Delete</button>
                    </AlertDialog.Action>
                </AlertDialog.Content>
            </AlertDialog.Portal>
        </AlertDialog.Root>
    );
}
