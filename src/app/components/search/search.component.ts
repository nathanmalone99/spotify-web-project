import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/shared/services/spotify.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchQuery: string;
  artists = [];
  constructor(
    private _spotifyService: SpotifyService,
    private _toastrService: ToastrService,
    private _spinnerServcie: NgxSpinnerService
  ) {}

  ngOnInit(): void {}

  searchMusic() {
    if (this.searchQuery != undefined && this.searchQuery != '') {
      this._spotifyService.getAllArtists(this.searchQuery).subscribe(
        (data: any) => {
          this.artists = data.artists.items;
        },
        (error) => {
          this._toastrService.error(error.message, 'Error');
        }
      );
    }
  }
}
