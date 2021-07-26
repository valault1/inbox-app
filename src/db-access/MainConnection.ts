/* eslint-disable */
import {MongoClient} from 'mongodb';

export default class MainConnection {
  public uri = "mongodb+srv://notes:TestPassword1!@notes-cluster.4um8f.mongodb.net/InboxDB?retryWrites=true&w=majority";
  public main = async () => {
    console.log("running main...");
    const client = new MongoClient(this.uri);
    try {
        await client.connect();
    
        await this.listDatabases(client);
    
    } catch (e) {
        console.error(e);
    }
    finally {
      await client.close();
    }
  }

  async listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
  }

  
}