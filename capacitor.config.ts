import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'minijuego-front',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    url:"http://192.168.1.114:3000"
  }
};

export default config;
