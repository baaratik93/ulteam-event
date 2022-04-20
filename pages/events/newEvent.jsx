import { useRef, useState, useEffect } from "react";
import { db } from '../../utils/firebase'
import { collection, addDoc } from "firebase/firestore";
import {FormControl,Input,FormLabel,Textarea, VStack, Text} from '@chakra-ui/react'
import CustomFormControl from '../../components/customized/CustFormControl'

const newEvent = () => {
    const refTitle = useRef();
    const refDescription = useRef();
    const refLocation = useRef();
    const refMoment = useRef();
    async function submitEvent (e) {
        e.preventDefault();
        const ev = {
            title: refTitle.current.value,
            description: refDescription.current.value,
            location: refLocation.current.value,
            moment: new Date(refMoment.current.value),
          }
        const AddedEvent = await fetch("/api/events/addNew", {
            method: 'POST',
            body: JSON.stringify(ev),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(data => data.json())
        .then(evented => evented)
        .catch(error => {throw error})
        // try {
            // const docRef = await addDoc(collection(db, "events"), {
            //     title: refTitle.current.value,
            //     description: refDescription.current.value,
            //     location: refLocation.current.value,
            //     moment: refMoment.current.value,
            //   });
        //       console.log("Evénement jouté avec succees: référence:", docRef.id);
        //        } catch (error) {
        //     console.log(error);
        // }
    }
return <> <form method="post" onSubmit={submitEvent} mt='xl'>
            <CustomFormControl>
                <FormLabel  htmlFor="title">Titre de l'événement</FormLabel>
                <Input type="datetime"  ref={refTitle} />
            </CustomFormControl>
            <CustomFormControl>
                <FormLabel  htmlFor="description">Description de l'événement</FormLabel>
                <Textarea rows="5" aria-multiline ref={refDescription} />
            </CustomFormControl>

            <CustomFormControl>
                <FormLabel htmlFor="location">Lieu de l'événement</FormLabel>
                <Input type="text" ref={refLocation} />
            </CustomFormControl>

            <CustomFormControl>
                <FormLabel htmlFor="moment">Date/Heure de l'événement</FormLabel>
                <Input type="date" ref={refMoment} />
            </CustomFormControl>
            
            <FormControl m="10px auto" w={
                ['50%', '40%','30%']
            }>
                <Input  bg="whatsapp.600" fontSize="20px" fontWeight='bold' type="submit" value="Valider" />
            </FormControl>
            
        </form>
        </>
}

export default newEvent