import { http } from "../service/http";

export async function fetchCalculoAtributoForca(value){
    return await http.get(`calculosAtributoForca/${value}`);    
}
