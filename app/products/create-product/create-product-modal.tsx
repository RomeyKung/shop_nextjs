"use client";

import {
  Box,
  Button,
  CircularProgress,
  Link,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CSSProperties, useState } from "react";
import { FormResponse } from "../../common/interfaces/form-response.interface";
import createProduct from "../action/create-product";
import { CloudUpload } from "@mui/icons-material";

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, 0)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const fileInputStyle: CSSProperties = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0,
};

interface ICreateProductModalProps {
  open: boolean;
  handleClose: () => void;
}

export default function CreateProductModal({
  open,
  handleClose,
}: ICreateProductModalProps) {
  const [response, setResponse] = useState<FormResponse>();
  const [fileName, setFileName] = useState("");

  const onClose = () => {
    setResponse(undefined);
    setFileName("");
    handleClose();
  };

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const fields = [
    {
      label: "Name",
      name: "name",
      type: "name",
      value: name,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setName(e.target.value),
    },

    {
      label: "Description",
      name: "description",
      type: "description",
      value: description,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setDescription(e.target.value),
    },

    {
      label: "Price",
      name: "price",
      type: "price",
      value: price,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setPrice(e.target.value),
    },
  ];

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={styles}>
        <form
          className="w-full max-w-xs"
          action={async (formData) => {
            const response = await createProduct(formData);
            setResponse(response);
            if (!response.error) {
              handleClose();
            }
          }}
        >
          <Stack spacing={2}>
            {fields.map((field) => (
              <TextField
                key={field.name}
                label={field.label}
                name={field.name}
                type={field.type}
                value={field.value}
                onChange={field.onChange}
                required
                variant="outlined"
                helperText={response?.error}
                error={!!response?.error}
              />
            ))}
            <Button
              component="label"
              variant="outlined"
              startIcon={<CloudUpload />}
            >
              Upload File
              <input
                type="file"
                name="image"
                style={fileInputStyle}
                onChange={(e) =>
                  e.target.files && setFileName(e.target.files[0].name)
                }
              />
            </Button>
            <Typography>{fileName}</Typography>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}
