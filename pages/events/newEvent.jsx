import form from '../../styles/form.module.css'
import { useRef, useState, useEffect } from "react";
import { db } from '../../utils/firebase'
import { collection, addDoc } from "firebase/firestore";

const newEvent = () => {
    const refTitle = useRef();
    const refDescription = useRef();
    const refLocation = useRef();
    const refMoment = useRef();
   async function submitEvent (e) {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "events"), {
                title: refTitle.current.value,
                description: refDescription.current.value,
                location: refLocation.current.value,
                moment: refMoment.current.value,
              });
              console.log("Evénement jouté avec succees: référence:", docRef.id);
               } catch (error) {
            console.log(error);
        }
    }
return <form className={form.form} method="post" onSubmit={submitEvent}>
            <div className={form.field}>
                <label className={form.label} htmlFor="title">Titre de l'événement</label>
                <input type="text" className={form.input} ref={refTitle} />
            </div>
            <div className={form.field}>
                <label className={form.label} htmlFor="description">Description de l'événement</label>
                <textarea rows="5" aria-multiline className={form.textarea} ref={refDescription} />
            </div>

            <div className={form.field}>
                <label className={form.label} htmlFor="location">Lieu de l'événement</label>
                <input type="text" className={form.input} ref={refLocation} />
            </div>

            <div className={form.field}>
                <label className={form.label} htmlFor="moment">Date/Heure de l'événement</label>
                <input type="date" className={form.input} ref={refMoment} />
            </div>
            
            <div className={form.field}>
                <input type="submit" value="Enrégistrer" />
            </div>
        </form>
}

export default newEvent