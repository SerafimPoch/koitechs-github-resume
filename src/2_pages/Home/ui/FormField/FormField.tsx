import React, { memo } from "react";
import { Button, TextField, Box, CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";

interface FormValues {
  githubUsername: string;
}

interface TFormField {
  handleSubmit: (values: FormValues) => void;
  isLoading: boolean;
}

const FormField = ({ handleSubmit, isLoading }: TFormField) => {
  const {
    register,
    handleSubmit: formSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  return (
    <form onSubmit={formSubmit((values) => handleSubmit(values))}>
      <Box display="flex" gap={2} alignItems="center">
        <TextField
          {...register("githubUsername", {
            required: "Please enter your GitHub username",
          })}
          label="Enter github username"
          variant="outlined"
          error={!!errors.githubUsername}
          helperText={errors.githubUsername?.message}
          disabled={isLoading}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isLoading}
        >
          {isLoading ? <CircularProgress size={24} /> : "Create"}
        </Button>
      </Box>
    </form>
  );
};

export default memo(FormField);
