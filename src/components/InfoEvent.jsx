import {
  Box,
  Grid,
  Typography,
  Button,
  Divider,
  Slide,
} from "@mui/material";
import ChurchIcon from "@mui/icons-material/Church";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { useInView } from "react-intersection-observer";
import ButtonLinks from "./ButtonLinks/ButtonLInks";

const InfoEvent = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      sx={{
        py: 6,
        px: 2,
        backgroundColor: "#BECCB7",
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="space-evenly"
        alignItems="center"
      >
        {/* Columna Izquierda */}
        <Grid item xs={12} md={6}>
          <Slide in={inView} direction="left" timeout={800}>
            <Box sx={{ textAlign: "center" }}>
            <Box
  component="img"
  src="/images/001/starsicon.gif"
  alt="Ceremonia"
  sx={{
    width: 125,       // equivalente a fontSize: 100
    height: 125,
    mb: 1
  }}
/>

              <Typography
                variant="h5"
                fontWeight="semibold"
                gutterBottom
                sx={{
                  fontFamily: "'Luxurious Script'",
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  color: "#536449"
                }}
              >
                Ceremonia y Fiesta
              </Typography>
              <Typography 
  variant="body1" 
  color="text.secondary" 
  sx={{mb: 1, fontFamily: "'Prata', serif", fontSize: { xs: "0.9rem", md: "1.5em" }, color: "#536449" }}
>
  17 de Enero de 2026 
</Typography>

<Typography 
  variant="body1" 
  color="text.secondary" 
  sx={{ mb: 1, fontFamily: "'Prata', serif", fontSize: { xs: "0.9rem", md: "1.5rem" },  color: "#536449"}}
>
  19:30 hs.
</Typography>

<Typography 
  variant="body1" 
  color="text.secondary" 
  sx={{ mb: 4, fontFamily: "'Prata', serif", fontSize: { xs: "0.9rem", md: "1.5em" } ,  color: "#536449"}}
>
  Salon Del Vergel - C. Simon Bolivar, M5600 | San Rafael, Mendoza 
</Typography>

 
<ButtonLinks
  label="Como llegar"
  href="https://www.google.com/maps/place/Sal%C3%B3n+Del+Vergel/@-33.7112176,-69.7860153,8z/data=!4m15!..."
  newTab
/>
            </Box>
          </Slide>
        </Grid>

   
      </Grid>
    </Box>
  );
};

export default InfoEvent;
