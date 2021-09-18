import axios, { AxiosResponse } from 'axios';


export default class EntryService {

  apiUrl: string;
  constructor() {
    this.apiUrl = process.env.VUE_APP_API_URL; 
    console.log("using api url " + this.apiUrl);
  }

  // Tells whether the username and password are valid
  async authenticateUser(username: string, password: string): Promise<boolean> {
    
    let body =  
    {
      username: username, password: password
    };
    let result =  await axios.post(this.apiUrl + "/user/authenticate", body)
    return result.data;
  }

  async getUser(username: string) {
    let result = await axios.get(this.apiUrl + "/user/" + username)
    return result.data;
  }
}