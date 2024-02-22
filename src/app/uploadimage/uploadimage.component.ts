import { Component } from '@angular/core';
import { SaveimageService } from '../saveimage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-uploadimage',
  standalone: true,
  imports : [CommonModule],
  templateUrl: './uploadimage.component.html',
  styleUrl: './uploadimage.component.css',
  providers:  [ SaveimageService ]
})
export class UploadimageComponent {
  imageUrl: string = "";
  uploaded : boolean = false;
  constructor(private saveImage : SaveimageService){

  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    this.uploadImage(file);
  }

  uploadImage(file: File): void {
    const formData = new FormData();
    formData.append('file', file);
    this.saveImage.SaveImage(formData).subscribe((response) => {
      alert("successfully uploaded image");
      console.log('Image uploaded successfully with ID: ', response.id);
      this.saveImage.getImage(response.id).subscribe((blob) => {
        const objectURL = URL.createObjectURL(blob);
        // Use the objectURL to display the image in your HTML
        // For example, set it as the source of an img element
        this.imageUrl = objectURL;
      });
    });
  }
}
