import React, { useState } from "react";
import { getUser } from "./Blockchain";
import { isAddress } from "ethers"; // ✅ Perbaikan import ethers.js untuk versi 6

function UserInfo() {
    const [userData, setUserData] = useState(null);
    const [wallet, setWallet] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleGetUser = async () => {
        setError("");
        setUserData(null);
        setLoading(true);

        // ✅ Perbaikan validasi wallet
        if (!isAddress(wallet)) {
            setError("Alamat wallet tidak valid!");
            setLoading(false);
            return;
        }

        try {
            console.log("Mengambil data untuk wallet:", wallet);
            const data = await getUser(wallet);

            console.log("Hasil getUser:", data);

            if (!data || data.length === 0) {
                setError("User tidak ditemukan.");
            } else {
                setUserData(data);
            }
        } catch (error) {
            console.error("Error fetching user:", error);
            setError("Gagal mendapatkan data.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 rounded-lg">
            <input
                type="text"
                className="border p-2 rounded w-80"
                placeholder="Masukkan alamat wallet"
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleGetUser}
                disabled={loading}
            >
                {loading ? "Loading..." : "Cek User"}
            </button>

            {error && <p className="text-red-500">{error}</p>}

           
            )}
        </div>
    );
}

export default UserInfo;
