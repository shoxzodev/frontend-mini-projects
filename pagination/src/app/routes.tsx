import { BrowserRouter, Navigate, Route , Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/notfound/NotFound";
import ModalImages from "../pages/ModalImages/ModalImages";

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />} >
                    <Route index={true} element={<Navigate to="images/modal" />} />
                    <Route path="images/modal" element={<ModalImages />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}