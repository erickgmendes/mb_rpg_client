import { http } from "../service/http";

export async function fetchInteligencia(value){
    return await http.get(`inteligencia/${value}`);    
}
