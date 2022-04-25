import React from "react";
import { useState } from "react";
import FormRegister from './Form';
import FormLogin from "./FormLogin";

function FormLoginPannel(props: any) {
    const [whereLog, setWhereLog] = useState<string>('Login');
    if (whereLog === 'Login') {
        return (
            <>
                <FormLogin setWhereLog={setWhereLog} whereLog={whereLog}/>
            </>
        );
    } else {
        return (
            <>
                <FormRegister setWhereLog={setWhereLog} whereLog={whereLog}/>
            </>
        );
    }
}

export default FormLogin;