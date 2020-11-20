import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {}

  setToken(): void {
    this.spotifyService
      .setToken()
      .subscribe((response) => console.log('token seteado correctamente'));
  }
}
