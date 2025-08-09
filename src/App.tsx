import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import UserBrain from "./components/pages/UserBrain";
import ShareBrain from "./components/pages/ShareBrain";
import NotFoundPage from "./components/pages/NotFoundPage";
import { useEffect } from "react";
import useTags from "./hooks/useTags";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<UserBrain />} />
      <Route path="/share/:shareLink" element={<ShareBrain />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  const { fetchAllTags } = useTags();
  useEffect(() => {
    fetchAllTags();
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
