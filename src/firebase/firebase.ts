import {initializeApp} from 'firebase/app';
import {deleteObject, getDownloadURL, getStorage, listAll, ref, uploadBytes} from 'firebase/storage'
import {collection, getFirestore, getDocs, deleteDoc, doc, setDoc} from 'firebase/firestore';
import {ApplicationType} from '../state/adminPanelSlice';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const storage = getStorage(app)

export const firebaseAPI = {
    sendApplicantObject: async (applicant: ApplicationType) => {
        const docRef = doc(db, "root_applicant", `${applicant.email} - ${applicant.appDate}` );
        return await setDoc(docRef, applicant)
    },
    getData: async () => {
        const docRef = collection(db, 'root_applicant');
        const docSnap = await getDocs(docRef);
        let res: any = []
        docSnap.forEach(el => {
            res = [...res, el.data()]
        })
        return res
    },
    delData: async (email: string, date: string) => {
        const docRef = doc(db, 'root_applicant', `${email} - ${date}`);
        await deleteDoc(docRef);
    },

    delFile: (name: string) => {
        const desertRef = ref(storage, 'contactFrom/' + name);

        // Delete the file
        deleteObject(desertRef).then(() => {
            console.log('deleted')
        })

    }
}