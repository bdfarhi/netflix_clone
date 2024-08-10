import {useState, useContext, useEffect} from 'react';
import {FirebaseContext} from '../context/firebase';
import {getAuth} from 'firebase/auth';

export default function useAuthListener() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));

    const {app} = useContext(FirebaseContext);
    const auth = getAuth(app);

    useEffect(() => {
        const listener= auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setUser(authUser);
            }else {
                localStorage.removeItem('authUser');
                setUser(null);
            }
        });

        return () => listener();
    });
    return {user};
};
