import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Player } from '../models/player';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};
const apiUrl = 'http://localhost:8080/api/players';

@Injectable({
  providedIn: 'root'
})

export class PlayersService {

  currentPlayerId: number;

  constructor(private http: HttpClient) { }

  setCurrentPlayerId(id: number) {
    this.currentPlayerId = id;
  }

  getCurrentPlayerId(): number {
    return this.currentPlayerId;
  }

  getPlayerById(id: number): Observable<Player> {
    return this.http.get<Player>(apiUrl + "/" + id);
  }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(apiUrl)
      .pipe(
        tap(player => console.log('fetched players')),
        catchError(this.handleError('getPlayers', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  deletePlayer(id: number): Observable<any> {
    return this.http.delete(apiUrl + "/" + id);
  }

  addPlayer(player: Player): Observable<any> {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("name", player.name);
    bodyEncoded.append("country", player.country);
    bodyEncoded.append("position", player.position);
    bodyEncoded.append("team", player.team);

    let body = bodyEncoded.toString();

    return this.http.post(apiUrl, body, httpOptions);
  }

  updatePlayer(id: number, player: Player): Observable<any> {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("name", player.name);
    bodyEncoded.append("country", player.country);
    bodyEncoded.append("position", player.position);
    bodyEncoded.append("team", player.team);

    let body = bodyEncoded.toString();

    return this.http.put(apiUrl + "/" + id, body, httpOptions);
  }
}
