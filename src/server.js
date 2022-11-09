import express from "express";
import { Dice } from "./classes/Dice.js";
export const app = express();

const dice = new Dice()

export const helloWorldServer = () => {
    app.get("/", (req, res)=>{
        const number = dice.rollDice()
        res.send(number.toString())
    })
}

export const initServer = (port) => {
    app.listen(port, ()=>{
        console.log(`App corriendo en el puerto ${port}`);
    })
} 