// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { addDoc, collection, getDocs, getFirestore, doc, updateDoc, getDoc, deleteDoc, writeBatch } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDWB7Env5iuC_Uc7e3fWIkPG8f4atcVSV0",
  authDomain: "jaynetwork-268f9.firebaseapp.com",
  projectId: "jaynetwork-268f9",
  storageBucket: "jaynetwork-268f9.appspot.com",
  messagingSenderId: "17254102038",
  appId: "1:17254102038:web:a71df37c8f7845177cb137",
  measurementId: "G-YHSDHMYCPX"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const database = getFirestore(app)
export const storage = getStorage(app)


export const LogInWithEmailAndPassword = async (email, password) => {
  if (!email && !password) return
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    return user
  } catch (error) {
    return error
  }

}

export const CreateUserWithEmailAndPassword = async (email, password) => {
  if (!email && !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}


export const userCollectionRef = collection(database, 'allUser')
export const postCollectionRef = collection(database, 'posts')

export const saveNewUserToDatabase = async (data) => {
  const batch = writeBatch(database)

  data.forEach(data => {
    const docRef = doc(userCollectionRef, data.email.toLowerCase());
    batch.set(docRef, data)
  })

  await batch.commit()

}

export const saveUserPostToDatabase = async (postdata) => {
  const response = await addDoc(postCollectionRef, postdata)
  return response
}

export const getAllUserFromDatabase = async () => {
  let user = await getDocs(userCollectionRef)
  return user
}

export const getUserDate = async (id) => {
  try {
    const userRef = doc(database, "allUser", id)
    const userData = await getDoc(userRef)
    return userData.docs
  } catch (error) {
    return error.message
  }
}

export const updateUserDate = async (id, updateItem) => {
  const userRef = doc(database, "allUser", id)
  if (auth) {
    await updateDoc(userRef, updateItem)
  }
}
export const updatePost = async (docId, updateItem) => {
  const postRef = doc(database, "posts", docId)
  await updateDoc(postRef, updateItem)
}

export const deletePostFromDatabase = async (docId) => {
  const docRef = doc(database, 'posts', docId)
  await deleteDoc(docRef)
}


export const authChange = (callBack) => {
  const authchange = onAuthStateChanged(auth, callBack)
  return authchange
}




