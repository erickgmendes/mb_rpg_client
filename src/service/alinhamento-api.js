import { http } from "../service/http";

export const fetchAlinhamentos = racas => http.get("alinhamentos");
