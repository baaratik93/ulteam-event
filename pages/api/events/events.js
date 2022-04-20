import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../utils/firebase'
export default async(req, res) => {
    const e = []
    // 
    switch (req.method) {
        case 'GET':
                const querySnapshot = await getDocs(collection(db, "events"));
                querySnapshot.forEach((doc) => {
                  e.push({
                    id: doc.id,
                    ...doc.data()
                  })
                });
                res.status(200).json(e)
            break;
    
        default:
            break;
    }
      
    
}
