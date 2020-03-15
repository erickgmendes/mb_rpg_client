import { http } from "../service/http";

export const fetchEquipamentos = habilidades => http.get("equipamentos");