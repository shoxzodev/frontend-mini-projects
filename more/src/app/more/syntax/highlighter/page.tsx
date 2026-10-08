"use client";

import { useState } from "react";

export default function SyntaxHighlighter() {
    const [ change , setChange ] = useState<boolean>(false); 
    
    return (
        <div className="p-3">
            {/* !doctype */}
            <div className={change ? "text-red-500" : ""}>
                <span className={change ? "text-blue-800" : ""}>{"<"}</span>
                {`!DOCTYPE html`}
                <span className={change ? "text-blue-800" : ""}>{">"}</span>
            </div>

            {/* html open: */}
            <div className={change ? "text-red-500" : ""}>
                <span className={change ? "text-blue-800" : ""}>{"<"}</span>
                {`html`}
                <span className={change ? "text-blue-800" : ""}>{">"}</span>
            </div>

            {/* body open: */}
            <div className={change ? "text-red-500" : ""}>
                <span className={change ? "text-blue-800" : ""}>{"<"}</span>
                    <span>body</span>
                <span className={change ? "text-blue-800" : ""}>{">"}</span>
            </div>
            
            {/* h2 element */}
            <div>
                <span className={change ? "text-blue-800" : ""}>{"<"}</span>
                    <span className={change ? "text-red-500" : ""}>h2</span>
                <span className={change ? "text-blue-800" : ""}>{">"}</span>
                <span>Testing an HTML Syntax Highlighter</span>
                <span className={change ? "text-blue-800" : ""}>{"<"}</span>
                    <span className={change ? "text-red-500" : ""}>/h2</span>
                <span className={change ? "text-blue-800" : ""}>{">"}</span>
            </div>

            {/* p element */}
            <div>
                <span className={change ? "text-blue-800" : ""}>{"<"}</span>
                    <span className={change ? "text-red-500" : ""}>p</span>
                <span className={change ? "text-blue-800" : ""}>{">"}</span>
                <span>Hello world!</span>
                <span className={change ? "text-blue-800" : ""}>{"<"}</span>
                    <span className={change ? "text-red-500" : ""}>/p</span>
                <span className={change ? "text-blue-800" : ""}>{">"}</span>
            </div>

            {/* a element: */}
            <div>
                <span className={change ? "text-blue-800" : ""}>{"<"}</span>
                <span className={change ? "text-red-500" : ""}>{`a href`}</span>
                <span className={change ? "text-blue-800" : ""}>{`="https://www.w3schools.com"`}</span>
                <span className={change ? "text-red-500" : ""}>{">"}</span>
                <span>Back to School</span>
                <span className={change ? "text-blue-800" : ""}>{"<"}</span>
                <span className={change ? "text-red-500" : ""}>/a</span>
                <span className={change ? "text-blue-800" : ""}>{`>`}</span>
            </div>
            
            {/* body close: */}
            <div className={change ? "text-red-500" : ""}>
                <span className={change ? "text-blue-800" : ""}>{"<"}</span>
                    <span>/body</span>
                <span className={change ? "text-blue-800" : ""}>{">"}</span>
            </div>
            
            {/* html close: */}
            <div className={change ? "text-red-500" : ""}>
                <span className={change ? "text-blue-800" : ""}>{"<"}</span>
                    <span>/html</span>
                <span className={change ? "text-blue-800" : ""}>{">"}</span>
            </div>

            <button onClick={() => setChange(current => current ? false : true)} className="bg-gray-500 cursor-pointer hover:bg-gray-600 text-white py-2 px-4">Toogle Syntax Highlighting</button>
        </div>
    )
}