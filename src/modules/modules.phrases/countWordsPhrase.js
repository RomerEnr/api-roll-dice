import { formatPhrase } from "./formatPhrase.js"

export const countWordsPhrase = (phrase = "") =>{
    const wordsInPhrase = formatPhrase(phrase).length;

    return `La frase "${phrase}" tiene ${wordsInPhrase} palabras`
}