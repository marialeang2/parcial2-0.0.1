

import { Anime } from "./anime";


export class AnimeDetail extends Anime {
  constructor(id: number,
    name: string,
    description: string,
    rating: number,
    episode: number,
    categorie: string,
    studio: string,
    img: string)
    {
    super(id, name, description, rating, episode, categorie, studio,img);
  }
}
