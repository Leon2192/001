import { Box, Typography, Grid, Slide, Fade } from "@mui/material";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const targetDate = new Date("2026-01-17T00:00:00"); // 17 de enero de 2026

const getTimeLeft = () => {
  const now = new Date();
  const difference = targetDate - now;

  const totalSeconds = Math.max(0, Math.floor(difference / 1000));
  const dias = Math.floor(totalSeconds / (3600 * 24));
  const horas = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutos = Math.floor((totalSeconds % 3600) / 60);
  const segundos = totalSeconds % 60;

  return { dias, horas, minutos, segundos };
};


const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const unidades = Object.entries(timeLeft);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      id="info"
      sx={{
        minHeight: "30vh",
        py: 6,
        backgroundColor: "#F3F1F2",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Slide in={inView} direction="up" timeout={800}>
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "3.2rem", md: "4rem" },
              fontFamily: "'Luxurious Script'",
              fontWeight: 500,
              mb: 1,
              color: "#536449",
            }}
          >
            Faltan...
          </Typography>
        </Box>
      </Slide>

      <Fade in={inView} timeout={1200}>
        <Grid container spacing={4} justifyContent="center">
          {unidades.map(([unit, value]) => (
            <Grid item key={unit}>
              <Box textAlign="center">
                <Typography
                  sx={{
                    fontSize: { xs: "2rem", md: "4rem" },
                    fontWeight: "bold",
                    color: "#536449",
                    fontFamily: "'Prata'",
                  }}
                >
                  {String(value).padStart(2, "0")}
                </Typography>
                <Typography
                  sx={{
                    textTransform: "capitalize",
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    fontFamily: "'Prata'",
                    color: "#555",
                  }}
                >
                  {unit}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Fade>
    </Box>
  );
};

export default Countdown;
