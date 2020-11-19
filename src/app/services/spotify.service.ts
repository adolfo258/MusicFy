import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getNewRealeases(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQC9PcSGCHdvLOeUfmOgC-U-q6HHxWtg9mjMS0cNfpP4jVbV0ar0Pd5h6XdLeX9sDRjcloxX_Qn7dhvOSfE'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=19', {headers});
  }
}
