import {addDoc,collection} from 'firebase/firestore'
import {db} from '../../../utils/firebase'


export default async(req, res) => {
    const event = req.body;
    if(req.method === 'POST') {
        try {
            const response = await addDoc(collection(db, "events"), event);
              res.status(201).json({
                  response:"Evénement jouté avec succees!!!",
                  evented: response
            });
            return response;
               } catch (error) {
            console.log(error);
        }
    }

}
