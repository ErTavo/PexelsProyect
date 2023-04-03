import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChunkPipe } from '../chunk.pipe';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes-component.component.html',
  styleUrls: ['./imagenes-component.component.css']
})
export class ImagenesComponent implements OnInit {
  photos: any[] = [];
  page: number = 1;
  perPage: number = 12;
  maxPage: number = 1;
  authKey: string = 'JTBSmeNF2fpsQFCBOBAE8piae2RshBoiXDz9QA94wgM24Ok35spmkT3c';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadPhotos();
  }

  loadPhotos() {
    const params = new HttpParams()
      .set('page', this.page.toString())
      .set('per_page', this.perPage.toString());

    this.http.get('https://api.pexels.com/v1/curated', {
      headers: {
        Authorization: this.authKey
      },
      params
    }).subscribe((data: any) => {
      this.photos = data.photos;
      this.maxPage = Math.ceil(data.total_results / this.perPage);
    });
  }
  nextPage() {
    if (this.page < this.maxPage) {
      this.page++;
      this.loadPhotos();
    }
  }
  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.loadPhotos();
    }
  }
}

