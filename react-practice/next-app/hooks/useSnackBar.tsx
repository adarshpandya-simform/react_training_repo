import { useSnackbar, VariantType } from "notistack";
import { Button } from "@mui/material";

// a custom wrapper hook on useSnackbar()
export const useSnackBar = (): {
  snackbarInjector: (message: string, variant: VariantType) => void;
} => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  // helper method to generate and close snackbar
  const snackbarInjector = (message: string, variant: VariantType): void => {
    enqueueSnackbar(message, {
      variant,
      autoHideDuration: 5000,
      action: (key) => (
        <Button
          color="inherit"
          onClick={() => {
            closeSnackbar(key);
          }}
        >
          close
        </Button>
      ),
    });
  };
  return { snackbarInjector };
};
