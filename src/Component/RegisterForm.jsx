import React, { useState } from "react";
import { registerUser } from "./Blockchain";

function RegisterForm() {
    const [name, setName] = useState("");

    const handleRegister = async () => {
        try {
            await registerUser(name);
            alert("User berhasil didaftarkan!");
        } catch (error) {
            console.error(error);
            alert("Gagal mendaftar");
        }
    };

    return (

        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleRegister}>
            Daftar
        </button>
        </div >
    );
}

export default RegisterForm;
