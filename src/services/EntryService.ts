import InboxEntry from '@/models/InboxEntry';
import axios, { AxiosResponse } from 'axios';

export default class EntryService {
  apiUrl: string;
  constructor() {
    this.apiUrl = process.env.VUE_APP_API_URL; 
    console.log("using api url " + this.apiUrl);
  }

  async getAllEntries(context: string) : Promise<AxiosResponse<Array<InboxEntry>>>{
    console.log("sending request to " + this.apiUrl + '/entry/entries/'+ context);
    const entries = await axios.get<Array<InboxEntry>>(this.apiUrl + '/entry/entries/'+ context);
    return entries;
  }

  async getEntriesByUserAndContext(userId: string, context: string) : Promise<AxiosResponse<Array<InboxEntry>>>{
    console.log("sending request to " + this.apiUrl + '/entry/' + userId + "/"+ context);
    const entries = await axios.get<Array<InboxEntry>>(this.apiUrl + '/entry/' + userId + "/"+ context);
    return entries;
  }

  async createEntry(content: string, userId: string, context: string) {
    console.log("sending request to " + this.apiUrl + '/entry/create');
    const result = await axios.put(this.apiUrl + '/entry/create', {content:content, userId: userId, context: context});
    return result;
  }

  async countByContext(context: string, userId: string) : Promise<AxiosResponse<number>> {
    console.log("sending request to " + this.apiUrl + '/entry/count/' + userId + "/" + context);
    const result = await axios.get<number>(this.apiUrl + '/entry/count/' + userId + "/" + context);
    return result;
  }

  async count(userId: string) : Promise<AxiosResponse<number>> {
    console.log("sending request to " + this.apiUrl + '/entry/count/' + userId);
    const result = await axios.get<number>(this.apiUrl + '/entry/count/' + userId);
    return result;
  }

  async archiveEntry(entryId : string) {
    console.log("sending request to " + this.apiUrl + '/entry/archive/' + entryId);
    console.log("archiving entry " + entryId);
    await axios.post(this.apiUrl + '/entry/archive/' + entryId);
  }
}