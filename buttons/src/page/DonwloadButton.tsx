import DownloadIcon from '@mui/icons-material/Download';

export default function DownloadButton() {
    return (
        <div className="max-w-37.5 ">
            <a className="bg-blue-500 text-white p-3 flex items-center justify-center hover:bg-blue-700 duration-75" href="https://github.com/github/gitignore/archive/refs/heads/main.zip">
                <DownloadIcon sx={{fontSize:"1.2rem"}} />
                <span>Download</span>
            </a>
        </div>
    )
}