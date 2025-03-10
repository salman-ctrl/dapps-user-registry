import { ethers } from "ethers";

const contractAddress = "0xe8004bA10350c5aB30D08F7b7fe6668F1F7CC3A7"; // Ganti dengan alamat contract-mu
const contractABI = [
    {
        "inputs": [],
        "name": "getAllUsers",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_wallet",
                "type": "address"
            }
        ],
        "name": "getUser",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            }
        ],
        "name": "registerUser",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]; // Copy ABI dari Remix
export async function registerUser(name) {
    try {
        if (!window.ethereum) throw new Error("MetaMask tidak ditemukan");

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        console.log("Mengirim transaksi...");
        const tx = await contract.registerUser(name);
        console.log(`Transaksi dikirim: ${tx.hash}`);

        await tx.wait();
        console.log("User berhasil terdaftar!");

        return tx.hash;
    } catch (error) {
        console.error("Gagal mendaftarkan user:", error);
        throw error;
    }
}

export async function getUser(wallet) {
    try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const contract = new ethers.Contract(contractAddress, contractABI, provider);

        const user = await contract.getUser(wallet);
        console.log("Data user:", user);
        return user;
    } catch (error) {
        console.error("Gagal mendapatkan user:", error);
        throw error;
    }
}
