import "./assets/styles/App.css";
import { TheCast } from "./pages/TheCast/TheCast";
import { Home } from "./pages/Home/Home";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./shared/api/query-client";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFound404/Not-found";
import { UniverseLayout } from "./components/UniverseLayout/UniverseLayout";
import { CastPage } from "./pages/CastPage/CastPage";
import { Locations } from "./pages/Locations/Locations";
import { Episodes } from "./pages/Episodes/Episodes";

export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Home />} />

          <Route element={<UniverseLayout />}>
            <Route path="cast" element={<TheCast />} />
            <Route path="location" element={<Locations />} />
            <Route path="episodes" element={<Episodes />} />
          </Route>

          <Route path="cast/:castId" element={<CastPage />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}
