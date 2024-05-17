import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { AnimeDetail } from './animeDetail';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private apiUrl : string = environment.baseUrl + 'anime.json'

constructor(private http: HttpClient) { }

getAnimes(): Observable<AnimeDetail[]>{
  return this.http.get<AnimeDetail[]>(this.apiUrl);
}

}
