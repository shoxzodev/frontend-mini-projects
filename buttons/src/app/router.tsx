import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import AlertButtons from "../page/AlertButtons";
import OutlineButtons from "../page/OutlineButtons";
import SplitButton from "../page/SplitButtons";
import LoadingButton from "../page/Loading";
import DownloadButton from "../page/DonwloadButton";
import FadeButtons from "../page/FadeButtons"
import Notification from "../page/Notification";
import ReadMore from "../page/ReadMOre";
import AnimatedButtons from "../page/AnimatedButtons";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout />,
        children: [
            {
                index:true,
                element:<Navigate to={"/button/alert"} />
            },
            {
                path:"button/alert",
                element:<AlertButtons />
            },
            {
                path:"button/outline",
                element:<OutlineButtons />
            },
            {
                path:"button/split",
                element:<SplitButton />
            },
            {
                path:"button/loading",
                element:<LoadingButton />
            },
            {
                path:"button/download",
                element:<DownloadButton />
            },
            {
                path:"button/fade",
                element:<FadeButtons />
            },
            {
                path:"button/notification",
                element:<Notification />
            },
            {
                path:"button/read-more",
                element:<ReadMore />
            },
            {
                path:"button/animated",
                element:<AnimatedButtons />
            }
        ]
    }
])

export default router