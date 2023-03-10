import { auth } from '../../firebase'
import axios from 'axios'



export async function getUser(id){
    const response = axios.get('/getUser')
}

export async function test(){
    const config = createConfig(await auth.currentUser.getIdToken())
    const response = await axios.get('/test', config)
    console.log(response)

}

function createConfig(token){
    return {headers: { 'Authorization': `Bearer ${token}`}}
}