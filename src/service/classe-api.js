import { http } from "../service/http";

export const fetchClasses = classes => http.get("classes");
