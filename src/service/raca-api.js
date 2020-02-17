import { http } from "../service/http";

export const fetchRacas = racas =>
  http.get("racas").then(res => console.log(res.data));
