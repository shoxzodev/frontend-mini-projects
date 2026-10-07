export default function TreeView() {
    return (
        <div>
            <details className="bg-gray-200 px-5 py-4">
                <summary className="cursor-pointer">Beverages</summary>
                <ul className="pl-4">
                    <li>Water</li>
                    <li>Coffee</li>
                    <li>
                        <details>
                            <summary className="cursor-pointer">tea</summary>
                            <ul className="pl-4">
                                <li>Black Tea</li>
                                <li>White Tea</li>
                                <li>
                                    <details>
                                        <summary className="cursor-pointer">Green Tea</summary>
                                        <ul className="pl-4">
                                            <li>Sencha</li>
                                            <li>Gyokuro</li>
                                            <li>Matcha</li>
                                            <li>Pi Lo Chun</li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </details>
        </div>
    )
}