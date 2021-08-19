import oldsettings from '@/app.json';
import settings from '@/localSettings.json'
import InboxEntry from '@/models/InboxEntry';
import axios, { AxiosResponse } from 'axios';

export default class EntryService {
  apiUrl = settings.apiUrl; 
  userId = settings.userId;
  async getAllEntries() : Promise<AxiosResponse<Array<InboxEntry>>>{
    console.log("sending request to " + this.apiUrl + '/entry/entries');
    const entries = await axios.get<Array<InboxEntry>>(this.apiUrl + '/entry/entries');
    return entries;
  }

  async createEntry(content: string, context: string) {
    console.log("sending request to " + this.apiUrl + '/entry');
    const result = await axios.put(this.apiUrl + '/entry', {content:content, userId: this.userId, context: context});
    return result;
  }

  async count(context: string) : Promise<AxiosResponse<number>> {
    console.log("sending request to " + this.apiUrl + '/entry/count/' + this.userId + "/" + context);
    const result = await axios.get<number>(this.apiUrl + '/entry/count/' + this.userId + "/" + context);
    return result;
  }

  async archiveEntry(entryId : string) {
    console.log("sending request to " + this.apiUrl + '/entry/archive/' + entryId);
    console.log("archiving entry " + entryId);
    await axios.post(this.apiUrl + '/entry/archive/' + entryId);
  }
}