import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import TransactionPage from "./pages/TransactionPage";
import DataPage from "./pages/DataPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "transaction", element: <TransactionPage /> },
      { path: "data", element: <DataPage /> },
    ],
  },
]);

export default router;
