import { Toast } from "primereact/toast";
import React, { useImperativeHandle, useRef } from "react";

export type ToastElemModel = {
    info: (message: string) => void;
    error: (message: string) => void;
}

export const  ToastElem = React.forwardRef(function (_, ref: any) {
    const toastRef = useRef(null);

    useImperativeHandle(ref, () => {
        return {
            info: (message: string) => {
               (toastRef.current as any).show({severity:'info', summary: 'Info', detail: message, life: 2000});
            },
            error: (message: string) => {
                (toastRef.current as any).show({severity:'error', summary: 'Error', detail: message, life: 2000});
            }
        }
    })

    return (
        <Toast ref={toastRef} />
    )
})
