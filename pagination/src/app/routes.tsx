import { BrowserRouter, Navigate, Route , Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/notfound/NotFound";
import ModalImages from "../pages/ModalImages/ModalImages";
import Gallery from "../pages/gallery/Gallery";
import Overlay from "../pages/overlay/Overlay";
import OverlaySlide from "../pages/overlay/slide/OverlaySlide";
import OverlayFade from "../pages/overlay/fade/OverlayFade";
import OverlayZoom from "../pages/overlay/zoom/OverlayZoom";
import OverlayTitle from "../pages/overlay/title/OverlayTitle";
import OverlayImage from "../pages/overlay/image/OverlayImage";
import Thubnails from "../pages/thumbnails/Thumbnails";
import ShakeImage from "../pages/shake/ShakeImage";
import FlipImage from "../pages/flip/FlipImage";
import SlideShow from "../pages/slideshow/Slideshow";
import SlideShowLayout from "../layouts/slideshow/SlideShowLayout";
import SlideShowGallery from "../pages/slideshow/gallery/SlideShowGallery";

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />} >
                    <Route index={true} element={<Navigate to="images/modal" />} />
                    <Route path="images/modal" element={<ModalImages />} />
                    <Route path="images/gallery" element={<Gallery />} />
                    <Route path="images/overlay" element={<Overlay />} >
                        <Route index={true} element={<Navigate to="/images/overlay/slide" />} />
                        <Route path="slide" element={<OverlaySlide />} />
                        <Route path="fade" element={<OverlayFade />} />
                        <Route path="zoom" element={<OverlayZoom />} />
                        <Route path="title" element={<OverlayTitle />} />
                        <Route path="image" element={<OverlayImage />} />
                    </Route>
                    <Route path="images/thubnails" element={<Thubnails />} />
                    <Route path="images/shake" element={<ShakeImage />} />
                    <Route path="images/flip" element={<FlipImage />} />
                    <Route path="images/slideshow" element={<SlideShowLayout />}>
                        <Route index={true} element={<SlideShow />} />
                        <Route path="gallery" element={<SlideShowGallery />} />
                    </Route>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}