import { http } from "../service/http";

export async function fetchConstituicao(value){
    return await http.get(`constituicao/${value}`);    
}