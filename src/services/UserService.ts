import settings from '@/app.json';
import InboxEntry from '@/models/InboxEntry';
import axios, { AxiosResponse } from 'axios';


export default class EntryService {

  apiUrl = settings.apiUrl; 

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