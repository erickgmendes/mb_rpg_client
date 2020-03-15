import { http } from "../service/http";

export const fetchHabilidades = habilidades => http.get("habilidades");