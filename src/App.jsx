import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Bookings from "./pages/Bookings";
import Users from "./pages/Users";
import Hotels from "./pages/Hotels";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./ui/PageNotFound";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Notifications from "./pages/Notifications";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />

      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Navigate to="dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/account" element={<Account />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/help" element={<Help />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        containerStyle={{ margin: "8px" }}
        gutter={12}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
