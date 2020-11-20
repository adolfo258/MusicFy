import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchArray = [];

  constructor(private spotifyService: SpotifyService, public router: Router) {}

  ngOnInit(): void {}

  search(value) {
    this.spotifyService.search(value).subscribe((response) => {
      console.log(response);
      this.searchArray = response.artists.items;
    });
  }

  showArtist(item) {
    if (item.type === 'artist') {
      this.router.navigateByUrl(`artist/${item.id}`);
    } else {
      this.router.navigateByUrl(`album/${item.id}`);
    }
  }
}
