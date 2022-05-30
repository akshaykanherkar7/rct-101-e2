import React from "react";
import AddProduct from "./AddProduct";
import Product from "./Product";
import Pagination from "./Pagination";
import { Flex, Grid } from "@chakra-ui/react";
import { useState } from "react";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // Flex = () => <div />;
  // Grid = () => <div />;
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [totalcount, setTotalcount] = useState();

  return (
    <Flex>
      <AddProduct
        setForm={setForm}
        form={form}
        setData={setData}
        data={data}
        page={page}
        limit={limit}
        totalcount={totalcount}
        setTotalcount={setTotalcount}
      ></AddProduct>
      <Grid>
        <Product data={data}></Product>
      </Grid>
      <Pagination totalcount={totalcount} page={page} setPage={setPage} limit={limit} setLimit={setLimit}></Pagination>
    </Flex>
  );
};

export default Products;
