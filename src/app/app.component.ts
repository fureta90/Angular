import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VersionService } from './services/version.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'login-app';
  version = '';

  constructor(private versionService: VersionService) {
    this.version = this.versionService.getAppVersion();
  }
}
