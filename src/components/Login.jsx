import React from "react";
import {FcGoogle} from 'react-icons/fc';
import firebaseApp from "../firebase";
import {getAuth,signInWithRedirect,GoogleAuthProvider} from "firebase/auth";
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();


const Login = () =>{
    return   <div className="login">
      <img src="imagenes/logo.png" className="img1" alt="logo"/>
    <div className="container-texto">
        <p className="texto1">LoremIpsum Dolor</p>
        <br/>
        <p className="texto2">It is a long established fact that a reader will be distracted by 
            the readable content of a page when looking at its layout.</p>
            <br/>
        <div className="btnG">
<FcGoogle className="goggle"/>
        <button
          variant="primary"
          type="submit"
          className="button2"
          onClick={() => signInWithRedirect(auth, googleProvider)}
        >
          Acceder con Google
        </button>
        </div>
            

        <p className="copy">&#169; 2022 Devs_United - <span>Beta</span></p>
    </div>
    </div>
};

export default Login;