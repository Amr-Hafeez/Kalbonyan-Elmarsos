import MeetupList from "@/components/meetups/MeetupList";
import {MongoClient} from "mongodb";
import Head from "next/head";


// Some Links
// https://www.munich.travel/var/ger_muc/storage/images/_aliases/gallery_offer/0/3/5/7/77530-1-ger-DE/frauenkirche-1741-foto-sigi-mueller-3000.jpg
// https://cdn.getyourguide.com/img/tour/5bc43cfaa2035.jpeg/145.jpg
// https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2022/02/munich-city-skyline-at-marienplatz-new-town-hall-munich-germany.jpg
// https://media.tacdn.com/media/attractions-splice-spp-674x446/06/e6/81/be.jpg


export default function Home(props) {
    return (
        <>
            <Head>
                <title>React Meetups</title>
                <meta
                    name={'description'}
                    content={'Browse a huge list of highly active meetups'}
                />
            </Head>
            <MeetupList meetups={props.meetups}/>
        </>
    )
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps() {
    
    const client = await MongoClient.connect('mongodb+srv://amrhafeez02:sccJjeyIafoaaw4u@cluster0.pkyavwc.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    
    let meetups = await meetupsCollection.find().toArray();
    meetups = meetups.map(meetup => {
        return {
            id: meetup._id.toString(),
            image: meetup.image,
            title: meetup.title,
            address: meetup.address,
        }
    });
    
    return {
        props: {
            meetups
        },
        revalidate: 1
    };
}
