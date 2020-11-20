import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  albumSelected;
  showInfo: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private spostifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res) => {
      this.showInfo = false;
      this.spostifyService.getAlbum(res.id).subscribe(
        (res) => {
          this.albumSelected = res;
          this.showInfo = true;
        },
        (err) => console.log(err)
      );
    });
  }
}
