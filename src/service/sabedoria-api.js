import { http } from "../service/http";

export async function fetchSabedoria(value){
    return await http.get(`sabedoria/${value}`);    
}
