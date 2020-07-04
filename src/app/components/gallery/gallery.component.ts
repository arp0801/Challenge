import { Component, OnInit } from '@angular/core';
import { UploadsService } from 'src/app/service/uploads.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  url: string;
  images: any;
  fileType: string;

  constructor( public imageService: UploadsService) { }

  ngOnInit(): void {
    this.imageService.getImages().subscribe(data => {
      this.images = data;
      console.log(this.images);
    });
  }

  onFileSelect(e) {
    this.fileType = e.target.files[0].type;
    if (this.fileType === 'image/png' || this.fileType === 'image/jpeg' ||
        this.fileType === 'image/gif' || this.fileType === 'image/jpg' ) {
      console.log(e);
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
        // console.log(this.url);
        const fd = {
          image: this.url
        };
        console.log(fd);
        this.imageService.postImage(fd).subscribe();
      };
    } else {
      alert('Please select an Image File');
    }
  }

}
