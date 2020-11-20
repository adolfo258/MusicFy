import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newRealeses = [];
  token: string;

  constructor(private spotifyService: SpotifyService) {
    spotifyService.getNewRealeases().subscribe(
      response => {
        console.log(response);
        this.newRealeses = response.albums.items;
      }
    );
  }

  ngOnInit(): void {
  }
}
