// exporting all the util functions
export { BASE_URL, WEB_SOCKET_BASE_URL } from "./getBaseUrl";
export { client } from "./getApolloClient";
export { trimText } from "./getStringTrimmer";
export { getBooksString } from "./getBooksString";
export {
  authorCreatedMsg,
  authorDeletedMsg,
  authorUpdatedMsg,
  bookCreatedMsg,
  bookDeletedMsg,
  bookUpdatedMsg,
} from "./getSnackbarMsgs";
