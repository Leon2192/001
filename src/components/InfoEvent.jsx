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
                fontWeight="bold"
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

 
              <a
                href="https://www.google.com/maps/place/Sal%C3%B3n+Del+Vergel/@-33.7112176,-69.7860153,8z/data=!4m15!1m7!3m6!1s0x9679a9dcc63f9671:0x3f7e773b005f1a2b!2sSal%C3%B3n+Del+Vergel!8m2!3d-34.652706!4d-68.318395!16s%2Fg%2F11tszfz8gw!3m6!1s0x9679a9dcc63f9671:0x3f7e773b005f1a2b!8m2!3d-34.652706!4d-68.318395!15sChdzYWxvbiBlbCB2ZXJnZWwgbWVuZG96YVoZIhdzYWxvbiBlbCB2ZXJnZWwgbWVuZG96YZIBBmxvdW5nZZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuVFVOUk0xQkVUVVJuRUFFqgFVEAEqEyIPc2Fsb24gZWwgdmVyZ2VsKA4yHxABIhu8lbGs-RX5bqDp1sQDmedke6DTbIhgOfby12oyGxACIhdzYWxvbiBlbCB2ZXJnZWwgbWVuZG96YeABAPoBBAgAEEY!16s%2Fg%2F11tszfz8gw?entry=ttu&g_ep=EgoyMDI1MDgwNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 999,
                    fontFamily: "'Prata'",
                    px: 4,
                    backgroundColor: "#DFC28C",
                    color: "#536449",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#fff",
                      border: "2px solid #d1c4e9",
                      color: "#4a148c",
                    },
                  }}
                >
                  Como llegar
                </Button>
              </a>
            </Box>
          </Slide>
        </Grid>

   
      </Grid>

      {/* Divider al final */}
      <Divider
        sx={{
          mt: 6,
          mx: "auto",
          width: "40px",
          borderBottomWidth: 2,
          borderColor: "#ccc",
        }}
      />
    </Box>
  );
};

export default InfoEvent;
