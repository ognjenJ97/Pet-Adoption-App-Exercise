import TestAxios from "../apis/TestAxios"
import jwt_decode from "jwt-decode"
// import jwt_decode from "jwt-decode"

export const login = async (username, password) => {

    const body = {
        username: username,
        password: password
    }
    try{
        const ret = await TestAxios.post("/korisnici/auth", body)
        const jwt_decoded = jwt_decode(ret.data);
        window.localStorage.setItem('jwt',ret.data);
        window.localStorage.setItem('role',jwt_decoded.role.authority);
        window.location.replace("/");
    }catch(err){
        alert("Neuspesan login");
        console.log(err);
    }
}

export const logout = () => {
    window.localStorage.removeItem("jwt")
    window.localStorage.removeItem("role")
    window.location.replace("/")
}