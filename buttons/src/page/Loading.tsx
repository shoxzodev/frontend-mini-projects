import SyncIcon from '@mui/icons-material/Sync';


export default function LoadingButton() {
    return (
        <div>
            <button className="bg-green-700 flex justify-center items-center text-white p-2 gap-2 cursor-pointer">
                  <SyncIcon sx={{
                    animation:"infinite 0.8s looping linear",
                    "@keyframes looping": {
                        from: {
                            rotate:"0"
                        }, 
                        to: {
                            rotate:"360deg"
                        }
                    }
                  }} />
                  <span className="text-[1.2rem]">Loading</span>
            </button>
        </div>
    )
}