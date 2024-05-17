import { Component, OnInit } from '@angular/core';
import { AnimeDetail } from '../animeDetail';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  animes : Array <AnimeDetail> = [];
  selected : boolean = false;
  selectedAnime!: AnimeDetail;


  constructor(private animeService : AnimeService) {}

  getAnimes(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes
    });
  }

  onSelected(anime: AnimeDetail): void {
    this.selected = true;
    this.selectedAnime = anime;
  }


  ngOnInit() {
    this.getAnimes();
  }

}
