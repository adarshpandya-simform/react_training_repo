import { useSnackbar, VariantType } from "notistack";
import { Button } from "@mui/material";

export const useSnackBar = (): {
  snackbarInjector: (message: string, variant: VariantType) => void;
} => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

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
