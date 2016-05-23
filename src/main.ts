import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { RawtimeAppComponent, environment } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';
import { ProjectService } from './app/services/project.service'

if (environment.production) {
  enableProdMode();
}

bootstrap(RawtimeAppComponent, [HTTP_PROVIDERS, ProjectService]);

