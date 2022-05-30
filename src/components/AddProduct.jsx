import {
  Button,
  Input,
  Modal,
  ModalBody,
  Radio,
  RadioGroup,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { useEffect } from "react";

const AddProduct = ({
  setData,
  setForm,
  data,
  form,
  page,
  limit,
  setTotalcount,
  totalcount,
}) => {
  // TODO: Remove below const and instead import them from chakra
  // Button = () => <div />;
  // Modal = () => <div />;
  // ModalBody = () => <div />;
  // Input = () => <div />;
  // Select = () => <div />;
  // RadioGroup = () => <div />;
  // Radio = () => <div />;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOnchange = (e) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/products", form).then((res) => {
      setData([...data, res]);
    });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
      .then((res) => {
        setData(res.data);
        setTotalcount(Number(res.headers["x-total-count"]));
      });
  }, [setData, page, limit]);

  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen}>
        Add New Product
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalBody pb={6}>
          <label>Title</label>
          <Input
            data-cy="add-product-title"
            name="title"
            value={form.title}
            onChange={handleOnchange}
          />
          <br />
          <br />
          <label>Category</label>
          <Select
            data-cy="add-product-category"
            name="category"
            value={form.category}
            onChange={handleOnchange}
          >
            <option data-cy="add-product-category-shirt" value="shirt">
              Shirt
            </option>
            <option data-cy="add-product-category-pant" value="pant">
              Pant
            </option>
            <option data-cy="add-product-category-jeans" value="jeans">
              jeans
            </option>
          </Select>
          <br />
          <label>Gender</label>
          <RadioGroup>
            <Radio
              data-cy="add-product-gender-male"
              onChange={handleOnchange}
              name="gender"
              value="male"
            >
              Male
            </Radio>
            <Radio
              data-cy="add-product-gender-female"
              onChange={handleOnchange}
              name="gender"
              value="female"
            >
              Female
            </Radio>
            <Radio
              data-cy="add-product-gender-unisex"
              onChange={handleOnchange}
              name="gender"
              value="unisex"
            >
              Unisex
            </Radio>
          </RadioGroup>
          <br />

          <label>Image URL</label>
          <input
            style={{ border: "1px solid lightgray" }}
            type="url"
            name="imageSrc"
            value={form.imageSrc}
            onChange={handleOnchange}
          />
          <br />
          <br />
          <label>Price</label>
          <Input
            data-cy="add-product-price"
            name="price"
            value={form.price}
            onChange={handleOnchange}
          />
          <br />
          <br />
          <Button data-cy="add-product-submit-button" onClick={handleSubmit}>
            Create
          </Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
