import { http } from "../service/http";

export async function fetchCalculosClerigo(nivel){
    return await http.get(`calculosClerigo/${nivel}`);    
}