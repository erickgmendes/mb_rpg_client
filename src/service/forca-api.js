import { http } from "../service/http";

export async function fetchForca(value){
    return await http.get(`forca/${value}`);    
}
