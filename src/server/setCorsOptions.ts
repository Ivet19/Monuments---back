import cors from "cors";

const setCorsOptions = () => {
  const options: cors.CorsOptions = { origin: true, credentials: true };

  return options;
};

export default setCorsOptions;
