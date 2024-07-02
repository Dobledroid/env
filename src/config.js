import { config } from 'dotenv';
config();

export default {
  port: process.env.PORT || 7000,
  message: process.env.MESSAGE || "No se reconoce el valor"
};
