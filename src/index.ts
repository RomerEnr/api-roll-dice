import { Film } from "./modules/Film/Film";

const film = new Film(1, "The Godfather", "Francis Ford Coppola", 1972);
const film2 = new Film(2, "The Godfather: Part II", "Francis Ford Coppola", 1974);
const film3 = new Film(3, "The Dark Knight", "Christopher Nolan", 2008);

export const films = [film, film2, film3];

