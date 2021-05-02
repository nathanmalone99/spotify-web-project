import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SpotifyService } from 'src/app/shared/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  artistId: string;
  artist: any;
  albums: any;
  constructor(
    private _spotifyService: SpotifyService,
    private _activatedRoute: ActivatedRoute,
    private _toastrService: ToastrService,
    private _spinnerServcie: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this.artistId = params.id;
    });

    this._spotifyService.getArtist(this.artistId).subscribe((data) => {
      this.artist = data;
     
    },
    (error) => {
      
      this._toastrService.error(error.message, 'Error');
    });
    
    this._spotifyService.getAlbums(this.artistId).subscribe((data) => {
      this.albums = data;
      
    },
    (error) => {
      
      this._toastrService.error(error.message, 'Error');
    });
  }
}
