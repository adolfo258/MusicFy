import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchArray = [];

  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit(): void {
  }

  search(value) {
    this.spotifyService.search(value).subscribe(
      response => {
        console.log(response);
        this.searchArray = response.artists.items;
      }
    );
  }

}
