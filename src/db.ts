import { MongoClient } from 'mongodb';
const uri = "mongodb+srv://winrono:nosovich1@playground-jl269.mongodb.net/test?retryWrites=true&w=majority";

export async function initDatabase() {
    return new Promise((resolve, reject) => {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        client.connect((err: any) => {
            const collection = client.db("test").collection("devices");
            resolve(client);
        });
    });
}
