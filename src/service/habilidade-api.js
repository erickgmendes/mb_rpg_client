import { http } from "../service/http";

export const fetchHabilidades = habilidades => http.get("habilidades")

export const fetchHabilidadeRaca = id => http.get(`habilidades/racas/${id}`)

export const fetchHabilidadeClasse = id => http.get(`habilidades/classes/${id}`)