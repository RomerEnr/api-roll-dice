import express from "express";
import { Dice } from "./classes/Dice.js";
export const app = express();

const dice = new Dice()

export const home = () => {
    app.get("/", (req, res)=>{
        res.send("Bienvenido a nuestra API")
    })
}

export const rollDiceSimple = () => {
    app.get("/rollDice/", (req, res)=>{
        const number = dice.rollDice()
        res.send(number.toString())
    })
}

export const rollDice = () => {
    app.get("/rollDice/:faces", (req, res)=>{
        dice.faces = req.params.faces
        const number = dice.rollDice()
        res.send(number.toString())
    })
}

export const initServer = (port) => {
    app.listen(port, ()=>{
        console.log(`App corriendo en el puerto ${port}`);
    })
} 