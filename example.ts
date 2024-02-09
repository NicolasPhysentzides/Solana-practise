import * as fs from "fs";
import * as dotenv from "dotenv";
import * as bip39 from "bip39";
import { Keypair } from "@solana/web3.js";

// Generate a 12-word recovery phrase
const mnemonic: string = bip39.generateMnemonic();

// Derive the seed from the recovery phrase
const seed: Buffer = bip39.mnemonicToSeedSync(mnemonic);

// Convert the seed to an array of numbers
const seedNumbers: number[] = Array.from(seed);

// Save the seed numbers as an environment variable in .env file
const envString: string = `SECRET_KEY=${JSON.stringify(seedNumbers)}`;
fs.writeFileSync(".env", envString);

// Save the mnemonic phrase to a text file
fs.writeFileSync("mnemonic.txt", mnemonic);

console.log("Generated recovery phrase:", mnemonic);
console.log("Generated seed numbers:", seedNumbers);

//comme
