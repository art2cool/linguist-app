import * as mongoose from "mongoose";


interface IHero {
    id: number,
    name?: string,
    aliases?: array,
    occupation?: string,
    gender?: string,
    height?: {
        ft?: number
        in?: number
    },
    hair: string,
    eyes: string,
    powers: array
}

interface IHeroModel extends IHero, mongoose.Document{};

const heroSchema = new mongoose.Schema({
    id: Number,
    name: String,
    aliases: Array,
    occupation: String,
    gender: String,
    height: {
        ft: Number
        in: Number
    },
    hair: String,
    eyes: String,
    powers: Array
});

const Hero = mongoose.model<IHeroModel>("Hero", heroSchema);

export Hero;
