import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from 'src/assets/Config';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private authorizationKey = `Bearer ${Config.AUTH_TOKEN}`;

  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': this.authorizationKey
    })
  };

  constructor(private _httpClient: HttpClient) {
  }

  getAllArtists(searchQuery): Observable<any> {
    let url = `https://api.spotify.com/v1/search?q=${searchQuery}&type=artist`;
    return this._httpClient.get<any>(url, this.httpOptions);
  }

  getArtist(artistId: string) : Observable<any> {
    let url = `https://api.spotify.com/v1/artists/` + artistId;
    return this._httpClient.get<any>(url, this.httpOptions);
  }

  getAlbums(artistId: string): Observable<any> {
    let url = `https://api.spotify.com/v1/artists/${artistId}/albums`;
    return this._httpClient.get<any>(url, this.httpOptions);
  }

  getAlbum(albumId: string) : Observable<any>{
    let url = `https://api.spotify.com/v1/albums/${albumId}`;
    return this._httpClient.get<any>(url, this.httpOptions);
  }

}
