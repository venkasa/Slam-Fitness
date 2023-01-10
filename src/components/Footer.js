import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/slam-logo.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#55595f">
    <Stack sx={{ alignItems: "center" }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: "100px" }} />
      <Typography
        variant="p"
        sx={{ fontSize: { lg: "18px", xs: "12px" } }}
        mt="20px"
        mb="20px"
        textAlign="center"
        style={{ width: "100%", color: "white" }}
      >
        Copyright © 2022 Slam Fitness Kodambakkam Studio. All Rights Reserved.
      </Typography>
    </Stack>
  </Box>
);

export default Footer;
