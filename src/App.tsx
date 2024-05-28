import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Page from "./features/page/Page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ path: "/:pageId", element: <Page /> }],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={BrowserRouter} />
    </QueryClientProvider>
  );
}

export default App;
