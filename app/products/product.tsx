"use client";
import { Card, CardActionArea, Stack, Typography } from "@mui/material";
import { Product as IProduct } from "./interfaces/product.interface";
import Image from "next/image";
import { getProductImage } from "./product-image";
import { useRouter } from "next/navigation";

interface IProductProps {
  product: IProduct;
}

export default function Product({ product }: IProductProps) {
  const router = useRouter();
  return (
    <CardActionArea
      onClick={() => {
        router.push(`/products/${product.id}`);
      }}
    >
      <Card className="p-4">
        <Stack gap={3}>
          <Typography variant="h4">{product.name}</Typography>
          {product.imageExists && (
            <Image
              src={getProductImage(product.id)}
              width={0}
              height={0}
              alt={product.name}
              className="w-full h-auto"
              sizes="100vw"
            />
          )}
          <Typography variant="body1">{product.description}</Typography>
          <Typography variant="body1">${product.price}</Typography>
        </Stack>
      </Card>
    </CardActionArea>
  );
}
