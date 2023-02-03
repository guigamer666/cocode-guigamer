// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyChYO3YJBepL10BX77hZeECxEJaarUPRt8',
  authDomain: 'pruebasreact-cfd28.firebaseapp.com',
  projectId: 'pruebasreact-cfd28',
  storageBucket: 'pruebasreact-cfd28.appspot.com',
  messagingSenderId: '214094816177',
  appId: '1:214094816177:web:2b2e72da67187c05421390'
};

// Initialize Firebase
// Inicializamos Firebase con la configuración que acabamos de especificar arriba
const app = initializeApp(firebaseConfig);

// Creamos algo público para que desde cualquier componente podamos venir aquí y utilizar Firebase. Cada componente que utilice Firebase importará firebaseConfig y utilizará db (podría tener otro nombre) para usar, en este caso, Firestore
export const db = getFirestore(app);
