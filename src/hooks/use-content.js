import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export default function useContent(target) {
    const [content, setContent] = useState([]);

    // Get Firebase app from context
    const { app } = useContext(FirebaseContext);

    // Initialize Firestore with the Firebase app
    const firestore = getFirestore(app);

    useEffect(() => {
        async function fetchData() {
            try {
                // Reference the collection and fetch documents
                const collectionRef = collection(firestore, target);
                const snapshot = await getDocs(collectionRef);

                const allContent = snapshot.docs.map((contentObj) => ({
                    ...contentObj.data(),
                    docId: contentObj.id,
                }));

                setContent(allContent);
            } catch (error) {
                console.log(error.message);
            }
        }

        fetchData();
    }, [firestore, target]);

    return { [target]: content };
}
