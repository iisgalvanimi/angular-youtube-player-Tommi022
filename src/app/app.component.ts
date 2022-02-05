import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Youtube Player</h1>
  <div>
    <youtube-player 
      videoId="GYAB4Td62zI" 
      suggestedQuality="highres" 
      [height]="250" 
      [width]="500" 
      [startSeconds]="4"
      [endSeconds]="8">
    </youtube-player>

    <youtube-player 
      videoId="6OUDk4gMFLA" 
      suggestedQuality="highres" 
      [height]="250" 
      [width]="500" 
      [startSeconds]="4"
      [endSeconds]="8">
    </youtube-player>
  </div> 
  <br> 
  <div>
    <youtube-player 
      videoId="GYAB4Td62zI" 
      suggestedQuality="highres" 
      [height]="250" 
      [width]="500" 
      [startSeconds]="4"
      [endSeconds]="8">
    </youtube-player>

    <youtube-player 
      videoId="6OUDk4gMFLA" 
      suggestedQuality="highres" 
      [height]="250" 
      [width]="500" 
      [startSeconds]="4"
      [endSeconds]="8">
    </youtube-player>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-youtube-player-Tommi022';
}
