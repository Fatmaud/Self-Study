import React, { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import BrandCard from "../components/Cards/BrandCard";

const Brands = () => {
  const {
    // getBrands,
    getStockData,
  } = useStockCall();
  const { brands } = useSelector((state) => state.stock);
  useEffect(() => {
    // getBrands()
    getStockData("brands");
  }, []);
  return (
    <Container>
      <Typography
        align="center"
        variant="h4"
        component="h1"
        color="secondary.second"
      >
        Brands
      </Typography>
      <Button variant="contained">Brands</Button>
      <Grid container spacing={2} mt={3}>
        {brands.map((brand) => (
          <Grid item xs={12} md={6} lg={4} xl={3} key={brand._id}>
            <BrandCard {...brand} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Brands;
