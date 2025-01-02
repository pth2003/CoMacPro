export const handleHttpStatusCode = (status, navigate) => {
  if (!status) return;
  switch (status) {
    case 404:
      navigate("/not-found");
      break;
    case "INTERNET_DISCONNECTED":
      navigate("/disconnected");
      break;
    default:
      navigate("/error");
      break;
  }
};
