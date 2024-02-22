import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'ng-pokemon-app',
  webDir: 'dist/ng-pokemon-app',
  server: {
    androidScheme: 'https'
  }
};

export default config;
