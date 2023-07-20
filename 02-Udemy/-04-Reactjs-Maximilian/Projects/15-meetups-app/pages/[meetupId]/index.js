import MeetupDetail from "@/components/meetups/MeetupDetail";
import {MongoClient, ObjectId} from "mongodb";

export default function MeetupDetails(props) {
    // console.log(props);
    return (
        <>
            <MeetupDetail {...props.meetupData}/>
        </>
    )
}

export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://amrhafeez02:sccJjeyIafoaaw4u@cluster0.pkyavwc.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    
    let meetups = await meetupsCollection.find({}, {_id: 1}).toArray();
    return {
        fallback: 'blocking',
        paths: meetups.map((meetup) => ({
            params: {
                meetupId: meetup._id.toString()
            }
        })),
    }
}

export async function getStaticProps(context) {
    const {meetupId} = context.params;
    // console.log(meetupId);
    const client = await MongoClient.connect('mongodb+srv://amrhafeez02:sccJjeyIafoaaw4u@cluster0.pkyavwc.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    
    let meetup = await meetupsCollection.findOne({_id: new ObjectId(meetupId)});
    client.close();
    // console.log(meetup);
    
    return {
        props: {
            meetupData: {
                id: meetup._id.toString(),
                title: meetup.title,
                image: meetup.image,
                description: meetup.description,
                address: meetup.address
            }
        }
    }
}
