import { http } from "../service/http";

export const fetchHabilidades = habilidades => http.get("habilidades")

export const fetchHabilidade = id => http.get(`habilidades/${id}`)