"use client";

import React, { useState, useActionState } from "react";
import NextLink from "next/link";
import { FormResponse } from "@/app/common/interfaces/form-response.interface";
import {
  Box,
  Button,
  Link,
  Stack,
  TextField,
  CircularProgress,
} from "@mui/material";
import createUser from "./create-user";

const INITIAL_STATE: FormResponse = {
  error: "",
};

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [state, formAction, isPending] = useActionState(
    createUser,
    INITIAL_STATE
  );

  const fields = [
    {
      label: "Email",
      name: "email",
      type: "email",
      value: email,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value),
    },

    {
      label: "Password",
      name: "password",
      type: "password",
      value: password,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setPassword(e.target.value),
    },
  ];

  return (
    <form action={formAction} className="w-full max-w-xs">
      <Stack spacing={2}>
        {isPending && (
          <Box sx={{ display: "flex", alignSelf: "center" }}>
            <CircularProgress />
          </Box>
        )}
        {fields.map((field) => (
          <TextField
            key={field.name}
            label={field.label}
            name={field.name}
            type={field.type}
            value={field.value}
            onChange={field.onChange}
            variant="outlined"
            helperText={state.error}
            error={!!state.error}
          />
        ))}

        <Button type="submit" variant="contained" disabled={isPending}>
          {isPending ? "Signing Up..." : "Sign Up"}
        </Button>

        <Link
          sx={{ alignSelf: "center" }}
          component={NextLink}
          href="/auth/login"
        >
          Login
        </Link>
      </Stack>
    </form>
  );
}
