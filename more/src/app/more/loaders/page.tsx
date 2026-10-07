export default function Loaders() {
    return (
        <div className="p-4 flex gap-10">
            <div className="animations basic-loader border-t-blue-700"></div>
            <div className="animations basic-loader border-b-blue-700 border-t-blue-700"></div>
            <div className="animations basic-loader border-b-red-700 border-l-green-700 border-t-blue-700"></div>
            <div className="animations basic-loader border-t-blue-700 border-b-red-700 border-l-green-700 border-pink-500"></div>
        </div>
    )
}