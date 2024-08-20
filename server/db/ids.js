import { customAlphabet } from "nanoid";

const Alphabet =
   "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

export const generateID = customAlphabet(Alphabet, 12);
