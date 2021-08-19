import oldsettings from '@/app.json';
import settings from '@/localSettings.json'
import InboxEntry from '@/models/InboxEntry';
import axios, { AxiosResponse } from 'axios';

export default class EntryService {
  apiUrl = settings.apiUrl; 
  userId = settings.userId;
  async getAllEntries() : Promise<AxiosResponse<Array<InboxEntry>>>{
    const entries = await axios.get<Array<InboxEntry>>(this.apiUrl + '/Entry/Entries');
    return entries;
  }

  async createEntry(content: string) {
    const result = await axios.put(this.apiUrl + '/Entry', {content:content, userId: this.userId});
    return result;
  }

  async count() : Promise<AxiosResponse<number>> {
    const result = await axios.get<number>(this.apiUrl + '/Entry/Count');
    return result;
  }

  async archiveEntry(entryId : string) {
    console.log("archiving entry " + entryId);
    await axios.post(this.apiUrl + '/Entry/Archive/' + entryId);
  }
}