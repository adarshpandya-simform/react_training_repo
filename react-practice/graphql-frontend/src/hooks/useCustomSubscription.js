import { useSubscription } from "@apollo/client";
import { useSnackbar } from "notistack";
import {
  SUBSCRIBE_TO_CREATE_AUTHOR,
  SUBSCRIBE_TO_CREATE_BOOK,
  SUBSCRIBE_TO_DELETE_AUTHOR,
  SUBSCRIBE_TO_DELETE_BOOK,
  SUBSCRIBE_TO_UPDATE_AUTHOR,
  SUBSCRIBE_TO_UPDATE_BOOK,
} from "../graphql";
import {
  authorCreatedMsg,
  authorDeletedMsg,
  authorUpdatedMsg,
  bookCreatedMsg,
  bookDeletedMsg,
  bookUpdatedMsg,
} from "../utils";

// snackbar options
const snackbarOptions = {
  variant: "info",
  style: { whiteSpace: "pre-line" },
  anchorOrigin: { vertical: "top", horizontal: "right" },
};

// defining a custom hook for subscription to
// remove repeating code for multiple subscriptions
export const useCustomSubscription = (SUBSCRIPTION) => {
  const { enqueueSnackbar } = useSnackbar();

  useSubscription(SUBSCRIPTION, {
    onSubscriptionData: ({ subscriptionData: { data } }) => {
      if (SUBSCRIPTION === SUBSCRIBE_TO_CREATE_BOOK) {
        enqueueSnackbar(
          bookCreatedMsg(data.bookCreated.title),
          snackbarOptions
        );
      }

      if (SUBSCRIPTION === SUBSCRIBE_TO_CREATE_AUTHOR) {
        enqueueSnackbar(
          authorCreatedMsg(data.authorCreated.name),
          snackbarOptions
        );
      }

      if (SUBSCRIPTION === SUBSCRIBE_TO_DELETE_BOOK) {
        enqueueSnackbar(
          bookDeletedMsg(data.bookDeleted.title),
          snackbarOptions
        );
      }

      if (SUBSCRIPTION === SUBSCRIBE_TO_DELETE_AUTHOR) {
        enqueueSnackbar(
          authorDeletedMsg(data.authorDeleted.name),
          snackbarOptions
        );
      }

      if (SUBSCRIPTION === SUBSCRIBE_TO_UPDATE_BOOK) {
        enqueueSnackbar(
          bookUpdatedMsg(data.bookUpdated.bookId, data.bookUpdated.title),
          snackbarOptions
        );
      }

      if (SUBSCRIPTION === SUBSCRIBE_TO_UPDATE_AUTHOR) {
        enqueueSnackbar(
          authorUpdatedMsg(data.authorUpdated.name),
          snackbarOptions
        );
      }
    },
  });
};
