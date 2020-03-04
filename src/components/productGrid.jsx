import React from "react";
import { Grid } from "@chakra-ui/core";
import Product from "./Product";

function ProductGrid({ products }) {
  if (!products) return null;

  return (
    <Grid mx='auto' templateColumns='repeat(3, 1fr)' gap={6} flexWrap='wrap'>
      {products.map(Product)}
    </Grid>
  );
}

export default ProductGrid;