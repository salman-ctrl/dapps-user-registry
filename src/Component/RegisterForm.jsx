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
        <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 rounded-lg">
            <input
                type="text"
                className="border p-2 rounded w-80"
                placeholder="Masukkan nama Anda"
                value={name}
             
}

            export default RegisterForm;
