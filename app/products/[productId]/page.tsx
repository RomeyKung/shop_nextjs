import { Grid, Stack, Typography } from "@mui/material";
import getProduct from "./get-product";
import Image from "next/image";
import { getProductImage } from "../product-image";
import Checkout from "@/app/checkout/checkout";
interface SingleProductPageProps {
  params: Promise<{
    productId: string;
  }>;
}

export default async function SingleProduct({
  params,
}: SingleProductPageProps) {
  const { productId } = await params;
  const product = await getProduct(Number(productId));
  return (
    <Grid container marginBottom={"2rem"} rowGap={3}>
      {product.imageExists && (
        <Grid size={{ md: 6, xs: 12 }}>
          <Image
            src={getProductImage(product.id)}
            width={0}
            height={0}
            alt={product.name}
            className="w-auto sm:w-3/4 h-auto"
            sizes="100vw"
          />
        </Grid>
      )}
      <Grid size={{ md: 6, xs: 12 }}>
        <Stack>
          <Typography variant="h2">{product.name}</Typography>
          <Typography>{product.description}</Typography>
          <Typography variant="h4">${product.price}</Typography>
          <Checkout productId={product.id} />
        </Stack>
      </Grid>
    </Grid>
  );
}
