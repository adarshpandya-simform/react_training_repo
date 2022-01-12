import Alert from "react-bootstrap/Alert";

const AlertBanner = ({ message, variant }) => {
  const alertMsg =
    message || "An unexpected error occured. Please try again later";
  const alertVariant = variant || "danger";

  return (
    <Alert variant={alertVariant} style={{ background: "red" }}>
      {alertMsg}
    </Alert>
  );
};

export default AlertBanner;
