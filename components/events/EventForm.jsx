import { useRef, useState, useEffect } from "react";
import useAuth from '../../hook/AuthContext'
import {FormControl,Input,FormLabel,Textarea, VStack, Text} from '@chakra-ui/react'
import CustomFormControl from '../customized/CustFormControl'


function EventForm ({isEdit, onSubmitEvent, event}) {
    const refTitle = useRef();
    const refDescription = useRef();
    const refLocation = useRef();
    const refMoment = useRef();
    const {user} = useAuth()

    const submitEvent = (e) => onSubmitEvent(
        {
        title: refTitle.current.value,
        description: refDescription.current.value,
        location: refLocation.current.value,
        moment: new Date(refMoment.current.value),
        author: user.uid 
      })

	useEffect(()=> {
		if(isEdit)
		{
                    refTitle.current.value= event.title,
		    refDescription.current.value=event.description
		    refLocation.current.value=event.location
		    refMoment.current.value=event.moment

		}
	},[])

    return <form method="post" onSubmit={submitEvent} mt='xl'>
                <CustomFormControl>
                    <FormLabel  htmlFor="title">Titre de l'événement</FormLabel>
                    <Input type="text" ref={refTitle} />
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
                    <Input  bg="whatsapp.600" fontSize="20px" fontWeight='bold' type="submit" value={ !isEdit ? "Valider" : "Modifier" }/>
                </FormControl>
                
            </form>
}


export default EventForm;
