import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaveimageService {

  constructor(private http : HttpClient) { }

  SaveImage(formData: FormData): Observable<any> {
    return this.http.post('http://localhost:5022/api/UploadFile/UploadImage', formData);
  }

  getImage(id: number): Observable<Blob> {
    return this.http.post('http://localhost:5022/api/UploadFile/GetImage', id, { responseType: 'blob' });
  }
}
