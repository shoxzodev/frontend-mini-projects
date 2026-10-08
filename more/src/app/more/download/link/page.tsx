import helloKity from "../../../../assets/hello-city.webp"

export default function DownloadLink() {    
    return (
        <div className="p-3">
            <a className="h-20 w-40" href={helloKity.src} download>
                <img className="h-20 w-40" src={helloKity.src} alt="hello city" />
            </a>
        </div>
    )
}