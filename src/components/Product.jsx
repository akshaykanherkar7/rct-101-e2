import {
  Box,
  Heading,
  Image,
  Stack,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Product = ({ data }) => {
  // TODO: Remove below const and instead import them from chakra
  // Text = () => <div />;
  // Image = () => <div />;
  // Box = () => <div />;
  // Stack = () => <div />;
  // Heading = () => <div />;
  // Tag = () => <div />;
  // TagLabel = () => <div />;
  return (
    <Stack data-cy="product">
      {data.map((el) => (
        <>
          <Image data-cy="product-image" src={el.imageSrc} />
          <Text data-cy="product-category">{el.category}</Text>
          <Tag>
            <TagLabel data-cy="product-gender">{el.gender}</TagLabel>
          </Tag>
          <Heading data-cy="product-title">{el.title}</Heading>
          <Box data-cy="product-price">{el.price}</Box>
        </>
      ))}
    </Stack>
  );
};

export default Product;
