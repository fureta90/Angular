import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VersionService } from './services/version.service';
import { FooterComponent } from './shared/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent, CommonModule, RouterOutlet],  // Asegúrate de incluir FooterComponent aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'login-app';
  version = '';

  constructor(private versionService: VersionService) {
    this.version = this.versionService.getAppVersion();
  }
}
