import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
})
export class ArtistComponent implements OnInit {
  artistSelected;
  showInfo: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private spostifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res) => {
      this.showInfo = false;
      this.spostifyService.getArtist(res.id).subscribe(
        (res) => {
          this.artistSelected = res;
          this.showInfo = true;
        },
        (err) => console.log(err)
      );
    });
  }
}
