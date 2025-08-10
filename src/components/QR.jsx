import { Box, Typography, Fade , Divider} from "@mui/material";
import { useInView } from "react-intersection-observer";
import ButtonLinks from "./ButtonLinks/ButtonLInks";

const Qr = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: "30vh",
        py: 8,
        px: 2,
        backgroundColor: "#DDE0CA", // fondo blanco
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Fade in={inView} timeout={800}>
        <Box
          sx={{
            transform: inView ? "scale(1)" : "scale(0.95)",
            transition: "transform 0.6s ease-out",
          }}
        >
          {/* Imagen centrada */}
          <Box display="flex" justifyContent="center" mb={2}>
            <Box
              component="img"
              src="/images/qr-logo.png"
              alt="Código QR"
              sx={{
                width: 200,
                height: 200,
                objectFit: "contain",
              }}
            />
          </Box>

          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Luxurious Script'",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              color: "#536449",
              mb: 1,
            }}
          >
            Escaneá este QR
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Prata'",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              color: "#536449",
              mb: 2,
            }}
          >
            ¡Compartí las fotos del evento con los anfitriones!
          </Typography>

          <Typography
  variant="body1"
  sx={{
    fontFamily: "'Prata'",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              color: "#536449",
              mb: 1,
  }}
>
  O podés presionar aquí
</Typography>

<Box mt={2}>
  <Box
    component="a"
    href="https://photos.app.goo.gl/irENLs3fg7bGSJ1m6"
    target="_blank"
    rel="noopener noreferrer"
    sx={{ textDecoration: "none" }}
  >
    
<ButtonLinks
  label="Ir Al Album"
  href="https://photos.app.goo.gl/irENLs3fg7bGSJ1m6"
  newTab
/>

  </Box>
</Box>

        </Box>
      </Fade>

       
    </Box>
  );
};

export default Qr;
