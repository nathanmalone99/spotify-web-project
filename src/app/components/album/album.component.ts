import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SpotifyService } from 'src/app/shared/services/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  artistId: string;
  album: any;
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
    
    this._spotifyService.getAlbum(this.artistId).subscribe((data) => {
      this.album = data;
      
    },
    (error) => {
      
      this._toastrService.error(error.message, 'Error');
    });
  }
}
