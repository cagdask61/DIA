import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';

import APP_CONFIG from './app.config';

const SERVER_CONFIG: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

const APP_CONFIG_SERVER = mergeApplicationConfig(APP_CONFIG, SERVER_CONFIG);
export default APP_CONFIG_SERVER;