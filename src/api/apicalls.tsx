import axios from 'axios';
import { configuration } from '../config';
export const signin = async (username:string, password:string) =>{
    try{
let data = JSON.stringify({
  username,
  password
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: `${configuration.baseUrl}/signin`,
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

const response = await axios.request(config);
return response.data;
    }
    catch(e:any){
        return {error:"Network error please. Please contact administrator"}
    }
}