import { BrowserRouter, Route , Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/notfound/NotFound";

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />} >

                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}