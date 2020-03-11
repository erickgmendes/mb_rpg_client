import { http } from "../service/http";

export const fetchRacas = racas => http.get("racas");

export const fetchRaca = id => http.get(`racas/${id}`);