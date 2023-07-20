import {MongoClient} from "mongodb";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        // console.log(typeof data)
        // const result = JSON.parse(data);
        // console.log(result);
        // const {title, image, address, description} = data;
        
        const client = await MongoClient.connect('mongodb+srv://amrhafeez02:sccJjeyIafoaaw4u@cluster0.pkyavwc.mongodb.net/meetups?retryWrites=true&w=majority')
        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        
        await meetupsCollection.insertOne({...data});
        client.close();
        //
        res.status(201).json({msg: 'Meetup inserted'})
    }
}