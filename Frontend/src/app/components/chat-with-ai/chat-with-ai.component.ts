import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat-with-ai',
  templateUrl: './chat-with-ai.component.html',
  styleUrls: ['./chat-with-ai.component.css']
})
export class ChatWithAiComponent {
  selectedFile: File | null = null;
  isFileUploaded: boolean = false;
  messages: { text: string, self: boolean }[] = [];
  newMessage: string = '';

  constructor(private http: HttpClient) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onFileUpload(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.http.post('/upload-endpoint', formData).subscribe({
        next: (response) => {
          console.log('Success:', response);
          this.isFileUploaded = true; // Show chat interface after successful upload
        },
        error: (error) => console.error('Error:', error)
      });
    }
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.messages.push({ text: this.newMessage, self: true });
      this.newMessage = '';

      // Simulate receiving a response from the AI detector
      setTimeout(() => {
        this.messages.push({ text: 'AI Detector response', self: false });
      }, 1000);
    }
  }
}
