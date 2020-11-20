import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getNewRealeases(): Observable<any> {
    const token = localStorage.getItem('Authorization');
    const headers = new HttpHeaders({
      Authorization: token,
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {
      headers,
    });
  }

  search(value): Observable<any> {
    const token = localStorage.getItem('Authorization');
    const headers = new HttpHeaders({
      Authorization: token,
    });

    return this.http.get(
      `https://api.spotify.com/v1/search?q=${value}&type=artist&limit=15`,
      { headers }
    );
  }

  setToken(): Observable<any> {
    const body = new HttpParams()
      .set('grant_type', 'client_credentials')
      .set('client_id', 'b90f1285d3874b94b8a0d4777b3c423d')
      .set('client_secret', 'f097664e807b4d64983c157d466c58ab');

    const options = {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      ),
    };

    return this.http
      .post('https://accounts.spotify.com/api/token', body, options)
      .pipe(
        tap((response) => {
          if (response.access_token) {
            localStorage.setItem(
              'Authorization',
              `Bearer ${response.access_token}`
            );
          } else {
            console.log('Error al setear token');
          }
        })
      );
  }
}
