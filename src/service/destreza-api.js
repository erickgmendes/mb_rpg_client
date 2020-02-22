import { http } from "../service/http";

export async function fetchDestreza(value){
    return await http.get(`destreza/${value}`);    
}
