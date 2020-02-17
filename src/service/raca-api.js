import { http } from "../service/http";

export const fetchRacas = racas => http.get("racas");
