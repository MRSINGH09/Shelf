import HomePage from "./pages/HomePage";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Description from "./pages/Description";
import CredentialsSignInPage from "./pages/SignInPage";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthProvider from "./context/AuthContext";
import Error from "./pages/Error404";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "description/:id",
        element: <Description />,
      },
    ],
  },
  {
    path: "/user",
    element: <MainLayout />,
    children: [
      {
        path: "signin",
        element: <CredentialsSignInPage />,
      },
      {
        index: true,
        element: <ProtectedRoute children={<HomePage />} />,
      },
      {
        path: "description/:id",
        element: <ProtectedRoute children={<Description />} />,
      },
    ],
  },
  {
    path:'/',
    element:<Navigate  to={'/admin'}/>
  },
  {
    path:'*',
    element:<Error/>
  }
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />;
    </AuthProvider>
  );
}

export default App;
