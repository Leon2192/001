import { Box, Typography, Button, Fade } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { useInView } from "react-intersection-observer";

const SuggestSong = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: "40vh",
        py: 8,
        px: 2,
        backgroundColor: "#F3F1F2", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Fade in={inView} timeout={1000}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Icono con animación tipo "latido" */}
          <Box
  component="img"
  src="/images/001/musicicon.gif"
  alt="Ceremonia"
  sx={{
    width: 125,       // equivalente a fontSize: 100
    height: 125,
    mb: 1
  }}
/>

          <Typography
            variant="h4"
            sx={{
            
                fontFamily: "'Prata'",
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                color: "#536449",
                mb: 1,
            }}
          >
            ¿Que canciones no pueden faltar?
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Prata'",
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                color: "#536449",
                mb: 4
            }}
          >
            ¡Ayudanos sugiriendo las canciones que pensás que no pueden faltar en la fiesta!
          </Typography>

         <Button
  component="a"
  href="https://docs.google.com/forms/d/e/1FAIpQLSf59-LbsKfKsKMH-d9Gt7q6xfSue8wgy4ZEyzUCDb4C9w2Qcg/viewform"
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
      border: "2px solid #d1c4e9",
      color: "#4a148c",
    },
  }}
>
  Sugerir canción
</Button>

        </Box>
      </Fade>
    </Box>
  );
};

export default SuggestSong;
