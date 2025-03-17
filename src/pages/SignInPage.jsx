import { useState, useEffect } from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";
import { useAuth } from "../context/AuthContext";

const providers = [{ id: "credentials", name: "Email and Password" }];

export default function CredentialsSignInPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState(""); // Track login errors
  const [openSnackbar, setOpenSnackbar] = useState(false); // Track snackbar state

  // Validate email and password
  useEffect(() => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.length >= 6;
    setIsValid(isEmailValid && isPasswordValid);
  }, [email, password]);

  // Handle sign-in function
  const signIn = (provider, formData) => {
    if (email === "user@gmail.com" && password === "12345678") {
      setIsAuthenticated(true);
      navigate("/user");
    } else {
      setError("Invalid email or password");
      setOpenSnackbar(true); // Open Snackbar on error
    }
  };

  return (
    <AppProvider theme={theme}>
      <SignInPage
        signIn={signIn}
        providers={providers}
        slotProps={{
          emailField: {
            autoFocus: true,
            value: email,
            onChange: (e) => setEmail(e.target.value),
            error:
              email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
          },
          passwordField: {
            value: password,
            onChange: (e) => setPassword(e.target.value),
            error: password.length > 0 && password.length < 6,
          },
          form: { noValidate: true },
          submitButton: { disabled: !isValid },
        }}
      />

      {/* Snackbar for Error Message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }} // Position of Snackbar
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          {error}
        </Alert>
      </Snackbar>
    </AppProvider>
  );
}
