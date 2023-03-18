import { signInWithCustomToken } from 'firebase/auth'
import { auth } from '../../firebase'
import axios from 'axios'

export async function createNewUser(email: string, password:string, displayName:string){
    const data = {
        email: email,
        password: password,
        displayName: displayName
    }


    const response = await axios.post('/createNewUser', data, config)
    console.log(response)
    if(response.data.result){
        signInWithCustomToken(auth, response.data.result).then((user) => {
            console.log('account created!')
            console.log(user)
            return user
        }).catch((err) => {
            console.log(err)
            return "uh oh"
        })
    }
}

const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };