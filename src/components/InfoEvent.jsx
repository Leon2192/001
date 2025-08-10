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
  sx={{mb: 1, fontFamily: "'Prata', serif", fontSize: { xs: "0.9rem", md: "1.5em" }, color: "#536449",   fontWeight: "bold", }}
>
  17 de Enero de 2026 
</Typography>

<Typography 
  variant="body1" 
  color="text.secondary" 
  sx={{ mb: 1, fontFamily: "'Prata', serif", fontSize: { xs: "0.9rem", md: "1.5rem" },  color: "#536449",   fontWeight: "bold",}}
>
  19:30 hs.
</Typography>

<Typography 
  variant="body1" 
  color="text.secondary" 
  sx={{ mb: 4, fontFamily: "'Prata', serif", fontSize: { xs: "0.9rem", md: "1.5em" } ,  color: "#536449",   fontWeight: "bold",}}
>
  Salon Del Vergel - C. Simon Bolivar, M5600 | San Rafael, Mendoza 
</Typography>

 
<ButtonLinks
  label="Como llegar"
  href="https://www.google.com/maps/place/Sal%C3%B3n+Del+Vergel/@-34.6527046,-68.3368275,15z/data=!3m1!4b1!4m9!1m2!2m1!1ssalon+del+vergel!3m5!1s0x9679a9dcc63f9671:0x3f7e773b005f1a2b!8m2!3d-34.652706!4d-68.318395!16s%2Fg%2F11tszfz8gw?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D"
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
