import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Spinner } from "@heroui/spinner";

import { appRoutes } from "@/constants/routes.ts";
import DefaultLayout from "@/layouts/Default.tsx";

const TopArtists = lazy(() => import("topArtists/TopArtists"));
const TopTracks = lazy(() => import("topTracks/TopTracks"));

console.log(TopArtists);

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />} path={appRoutes.root}>
        <Route index element={<div>INDEX PAGE</div>} />
        <Route
          element={
            <Suspense fallback={<Spinner color="danger" />}>
              <TopArtists />
            </Suspense>
          }
          path={appRoutes.topArtists.root}
        />
        <Route
          element={
            <Suspense fallback={<Spinner color="danger" />}>
              <TopTracks />
            </Suspense>
          }
          path={appRoutes.topTracks.root}
        />
      </Route>
    </Routes>
  );
}

export default App;
