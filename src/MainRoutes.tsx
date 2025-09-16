import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

import AdminLayout from "./components/Admin/Layout/AdminLayout";
import HomePage from "./Pages/Admin/HomePage";
import ClientManagmentPage from "./Pages/Admin/ClientManagmentPage";
import MaintanaceSchedulingPage from "./Pages/Admin/MaintanaceSchedulingPage";
import RequestAlertsPage from "./Pages/Admin/RequestAlertsPage";
import FacilityHardwarePage from "./Pages/Admin/FacilityHardwarePage";
import DocumentsPage from "./Pages/Admin/DocumentsPage";
import BillingInvoicesPage from "./Pages/Admin/BillingInvoicesPage";
import SupportTicketPage from "./Pages/Admin/SupportTicketPage";
import NotificationPage from "./Pages/Admin/NotificationPage";
import SettingsPage from "./Pages/Admin/SettingsPage";
import Signin from "./Pages/Signin/Signin";
import SystemSettings from "./Pages/Admin/SystemSettings";

// Routing structure:
// - "/"           → Signin (no layout)
// - "/dashboard/*" → Admin pages with layout

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin />,
  },

  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      { path: "", element: <HomePage /> }, 
      { path: "client-management", element: <ClientManagmentPage /> },
      { path: "maintenance-scheduling", element: <MaintanaceSchedulingPage /> },
      { path: "requests-alerts", element: <RequestAlertsPage /> },
      { path: "facility-hardware", element: <FacilityHardwarePage /> },
      { path: "documents", element: <DocumentsPage /> },
      { path: "billing-invoices", element: <BillingInvoicesPage /> },
      { path: "support-ticket-handling", element: <SupportTicketPage /> },
      { path: "notifications", element: <NotificationPage /> },
      { path: "settings", element: <SettingsPage /> },
      { path: "system-settings", element: <SystemSettings /> },
    ],
  },
]);

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
