import { Injectable } from '@angular/core';
import packageJson from '../../../package.json';

@Injectable({
  providedIn: 'root'
})
export class VersionService {
  getAppVersion(): string {
    return packageJson.version;
  }
}
