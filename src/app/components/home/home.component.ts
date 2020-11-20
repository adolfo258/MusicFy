import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  newRealeses = [];
  token: string;

  constructor(private spotifyService: SpotifyService, public router: Router) {
    spotifyService.getNewRealeases().subscribe((response) => {
      console.log(response);
      this.newRealeses = response.albums.items;
    });
  }

  ngOnInit(): void {}

  showArtist(item) {
    if (item.type === 'artist') {
      this.router.navigateByUrl(`artist/${item.id}`);
    } else {
      this.router.navigateByUrl(`album/${item.id}`);
    }
  }
}
