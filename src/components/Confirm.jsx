import { Box, Typography, Button } from "@mui/material";

const Confirm = () => {
  return (
    <Box
      sx={{
        minHeight: "40vh",
        py: 8,
        px: 2,
        backgroundColor: "#F3F1F2", // celeste pastel claro
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {/* Título principal cursiva */}
      <Typography
        variant="h4"
        sx={{
          fontFamily: "'Luxurious Script'",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              color: "#536449",
          fontWeight: "bold",
          mb: 2,
        }}
      >
        Confirmación de asistencia
      </Typography>

      {/* Subtítulo más pequeño */}
      <Typography
        variant="body1"
        sx={{
          fontFamily: "'Prata'",
          fontSize: { xs: "1.2rem", md: "1.5rem" },
          color: "#536449",
          mb: 4,
        }}
      >
        Esperamos que seas parte de esta gran celebración. ¡Confirmanos tu asistencia!
      </Typography>

      {/* Botón */}
      <Button
        component="a"
        href="https://docs.google.com/forms/d/e/1FAIpQLSelY0QMb2Pdi7bOb19tFv-Q42qepyMiIHq9qaPUBfGh_Qr8Lw/viewform?fbzx=4030668355714172330"
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        sx={{
          borderRadius: 999,
          px: 4,
          backgroundColor: "#536449",
          fontFamily: "'Prata'",
          color: "#ffffff",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#fff",
            border: "2px solid #b2ebf2",
            color: "#004d40",
          },
        }}
      >
        Confirmar asistencia
      </Button>
    </Box>
  );
};

export default Confirm;
