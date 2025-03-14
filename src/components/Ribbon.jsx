import { Box } from "@mui/material";

function Ribbon({ genre }) {
  return (
    <Box
      className="ribbon"
      sx={{
        fontSize: "1.2rem",
        fontWeight: "500",
        color: "#fff",
        "--f": ".5em",
        position: "absolute",
        top: 0,
        left: 0,
        lineHeight: "1.8",
        paddingInline: "1lh",
        paddingBottom: "var(--f)",
        borderImage: "conic-gradient(#0008 0 0) 51%/var(--f)",
        clipPath:
          "polygon(100% calc(100% - var(--f)),100% 100%,calc(100% - var(--f)) calc(100% - var(--f)),var(--f) calc(100% - var(--f)), 0 100%,0 calc(100% - var(--f)),999px calc(100% - var(--f) - 999px),calc(100% - 999px) calc(100% - var(--f) - 999px))",
        transform:
          "translate(calc((cos(45deg) - 1)*100%), -100%) rotate(-45deg)",
        transformOrigin: "100% 100%",
        backgroundColor: "#F07818",
        opacity: 0, // Initially hidden
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      {genre}
    </Box>
  );
}

export default Ribbon;
