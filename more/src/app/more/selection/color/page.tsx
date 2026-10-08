export default function TextSelection() {
    return (
        <div className="p-4">
            <div className="border-gray-500 border max-w-150 flex">
                <p className="p-2 border-r border-r-gray-500">Default text selection color</p>
                <p className="p-2 selection:bg-amber-400 selection:text-red-600">Custom text selection color</p>
            </div>
        </div>
    )
}