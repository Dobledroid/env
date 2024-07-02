import { config } from 'dotenv';
config();

export default {
  port: process.env.PORT,
  message: process.env.MESSAGE || "No se reconoce el valor"
};
