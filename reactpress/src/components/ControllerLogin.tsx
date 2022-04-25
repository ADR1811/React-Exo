import React from "react";
import { useState } from "react";
import FormRegister from './FormRegister';
import FormLogin from "./FormLogin";

type AppProps = {
    setForm: any;
    Form : string;
};


export default function ControllerLogin({setForm , Form}: AppProps) {

    // const [whereLog, setWhereLog] = useState<string>('Login');
    
    // if (whereLog === 'Login') {
    //     return (
    //         <>
    //             <FormLogin setWhereLog={setWhereLog} whereLog={whereLog}/>
    //         </>
    //     );
    // } else {
    //     return (
    //         <>
    //             <FormRegister setWhereLog={setWhereLog} whereLog={whereLog}/>
    //         </>
    //     );
    // }
    return(<>oui</>);
}
