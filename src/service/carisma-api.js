import { http } from "../service/http";

export async function fetchCarisma(value){
    return await http.get(`carisma/${value}`);    
}