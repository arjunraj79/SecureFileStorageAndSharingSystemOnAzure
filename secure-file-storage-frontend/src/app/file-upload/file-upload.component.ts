import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  file: File | null = null;

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  async uploadFile() {
    if (this.file) {
      const formData = new FormData();
      formData.append('file', this.file);

      try {
        const response = await axios.post('http://localhost:3000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        alert('File uploaded successfully');
      } catch (error) {
        console.error('Error uploading file', error);
        alert('Error uploading file');
      }
    }
  }
}
