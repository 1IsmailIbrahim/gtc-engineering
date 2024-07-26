import { HomePage } from "@/pages/Home";
import RootLayout from "@/pages/Layout";
import PageNotFound from "@/pages/PageNotFound";
import ProductsPage from "@/pages/Products";
import VideosPage from "@/pages/Videos";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="videos" element={<VideosPage />} />
      </Route>

      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

export default router;
