
import EventForm from '../../components/events/EventForm';

const newEvent = () => {
    
    async function submitEvent (event) {
        
        
        const AddedEvent = await fetch("/api/events/addNew", {
            method: 'POST',
            body: JSON.stringify(event),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(data => data.json())
        .then(evented => evented)
        .catch(error => {throw error})
        console.log(AddedEvent);
    }
return <EventForm onSubmitEvent={submitEvent}/>
}

export default newEvent
