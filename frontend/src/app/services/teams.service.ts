import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Team } from '../models/team';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};
const apiUrl = 'http://localhost:8080/api/teams';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  currentTeamId: number;

  constructor(private http: HttpClient) { }

  setCurrentTeamId(id: number) {
    this.currentTeamId = id;
  }

  getCurrentTeamId(): number {
    return this.currentTeamId;
  }

  getTeamById(id: number): Observable<Team> {
    return this.http.get<Team>(apiUrl + "/" + id);
  }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(apiUrl)
      .pipe(
        tap(team => console.log('fetched teams')),
        catchError(this.handleError('getTeams', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  deleteTeam(id: number): Observable<any> {
    return this.http.delete(apiUrl + "/" + id);
  }

  addTeam(team: Team): Observable<any> {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("name", team.name);
    bodyEncoded.append("country", team.country);
    bodyEncoded.append("stadium", team.stadium);

    let body = bodyEncoded.toString();

    return this.http.post(apiUrl, body, httpOptions);
  }

  updateTeam(id: number, team: Team): Observable<any> {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("name", team.name);
    bodyEncoded.append("country", team.country);
    bodyEncoded.append("stadium", team.stadium);

    let body = bodyEncoded.toString();

    return this.http.put(apiUrl + "/" + id, body, httpOptions);
  }
}
