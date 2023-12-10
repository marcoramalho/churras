import axios from "axios";
import { url } from "./api";

export const api = axios.create({
    baseURL: url.dev,
    headers: {
      'Content-Type': 'application/json'
    }
  });