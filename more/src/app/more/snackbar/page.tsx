"use client"

import SnackBar from "@/src/components/modalsUi/SnackBar";
import { useState } from "react";

export default function Snackbar() {
    const [hideSnackBar , setHideSnackBar] = useState(false);
    return (
        <div className="p-5">
            <button onClick={() => setHideSnackBar(true)} className="bg-gray-600 text-white rounded-sm py-1 px-3 cursor-pointer hover:bg-green-600">Show Snackbar</button>
            <SnackBar hide={hideSnackBar} makeHidden={setHideSnackBar} />
        </div>
    )
}