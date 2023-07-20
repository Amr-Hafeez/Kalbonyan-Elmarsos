// our-domain.com/new-meetup

import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import Layout from "@/components/layout/Layout";
import {useRouter} from "next/router";


export default function NewMeetup() {
    const router = useRouter();
    
    async function addMeetupHandler(enteredMeetupData) {
        const res = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        console.log(data);
        
        await router.replace('/')
    }
    
    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    )
}