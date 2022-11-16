import axios from "axios";

function postSignUp(body) {
    return axios.post("http://localhost:5000/sign-up", body)
}

function postSignIn(body){
    return axios.post("http://localhost:5000/sign-in", body)
}
export{
    postSignUp,
    postSignIn
}