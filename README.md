# README

## TO START PROJECT

1. Clone the repo
1. Go to project folder
1. Run from console

```sh
  yarn
  cd ios
  pod install
  cd ../
```

## RUN & ASSEMBLE

## WARNING

- **Please - use only "dev" scheme/productFlavor for development! "stage"/"preproduction"/"production" are going to be used while QA/Production**
- **On iOS platform only "dev" scheme is debuggable, "stage"/"preproduction"/"production" are signed via release configs**

## How to run

### Android

#### WARNING

- No install 10 JDK or higher.
- No pure `react-native run-android` usage. For development - please use commands below;
- No pure `cd android && ./gradlew assembleRelease` usage. For development - please use commands below;

#### Running on simulator/real device in debug mode

1. `yarn run android:run-dev` - dev version (uses config from `.env.dev`);
1. `yarn run android:run-stage` - stage version (uses config from `.env.stage`);
1. `yarn run android:run-preprod` - stage version (uses config from `.env.preprod`);
1. `yarn run android:run-prod` - production version (uses config from `.env.prod`);

##### NOTE: After build was successfully assembled - it can show next error

`Starting: Intent { cmp=com.app/.MainActivity } Error type 3 Error: Activity class {com.app/com.app.MainActivity} does not exist.`

##### That is ok. Just press on application icon on your simulator/device and everything will work

#### Assembling build (release mode)

1. `yarn run android:build-dev` - dev version (uses config from `.env.dev`);
1. `yarn run android:build-stage` - stage version (uses config from `.env.stage`);
1. `yarn run android:build-preprod` - stage version (uses config from `.env.preprod`);
1. `yarn run android:build-prod` - production version (uses config from `.env.prod`);

### iOS

#### WARNING

- No pure `react-native run-ios` usage. For development - please use Xcode;
- Please, use `xcworkspace` file, not `xcproject`.

#### Running on simulator/real device

1. Choose scheme;
1. Run on simulator/device;

#### Assembling build (release mode)

1. Choose scheme;
1. Run "Product/Archive";

## CHANGE DEFAULT BUNDLE ID

Run shell script from terminal

`sh ./change_bundle_id.sh ${old_bundle_id} ${new_bundle_id}`

`old_bundle_id` is `com.starter` here;

## HOW TO FIX ISSUE WITH `config.h` or THIRD PARTY

### STEPS

#### FIRST OF ALL - Try to set `Build System` TO `Legacy Build System`. To do this - open

1. XCode -> File -> (Project Settings or Workspace Settings)

1. And choose `Legacy Build System` in `Build System` dropdown;

1. After this - re-install `node_modules`;

If this wasn't helpful - try next steps:

1. `rm -r ~/.rncache`
1. `rm -rf node_modules`
1. `yarn`
1. `react-native run-ios --scheme "dev"`
1. `cd node_modules/react-native/third-party/glog{version number} && sh ./configure`
1. clear `Derived Data` in Xcode
1. Run build in Xcode
