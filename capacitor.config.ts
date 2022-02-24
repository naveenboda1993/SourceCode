import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ionic-material-design-t1',
  webDir: 'www',
  bundledWebRuntime: false,
  cordova: {
    preferences: {
      ScrollEnabled: 'false',
      'android-minSdkVersion': '19',
      BackupWebStorage: 'none',
      AutoHideSplashScreen: 'false',
      SplashScreenDelay: '10000',
      FadeSplashScreenDuration: '0',
      ShowSplashScreen: 'true',
      ShowSplashScreenSpinner: 'false',
      SplashShowOnlyFirstTime: 'false',
      FadeSplashScreen: 'true',
      SplashScreen: 'screen'
    }
  }
};

export default config;
