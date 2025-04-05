import cors from "cors";

const setCorsOptions = () => {
  const allowedOrigins = ["https://monuments-2025.netlify.app"];
  const options: cors.CorsOptions = {
    origin: allowedOrigins,
  };

  return options;
};

export default setCorsOptions;
