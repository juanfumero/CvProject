import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-experience',
  standalone: false,
  templateUrl: './video-experience.component.html',
  styleUrl: './video-experience.component.scss'
})
export class VideoExperienceComponent implements OnInit {
  @Input() videoId!: string; 
  sanitizedUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.videoId}`
    );
  }
}
