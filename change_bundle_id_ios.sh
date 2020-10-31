# COLOR VARIABLES

INFO_COLOR='\033[0;33m';
FASTLANE_COLOR='\033[0;35m';
IOS_COLOR='\033[0;34m';
NO_COLOR='\033[0m';

# FASTLANE FILES
FL_FASTFILE_PATH="fastlane/Fastfile";
FL_APPFILE_PATH="fastlane/Appfile";

# IOS FILES
IOS_PBXPROJ_PATH="ios/rn_starter.xcodeproj/project.pbxproj";

# ANDROID FILES

ANDROID_PROGUARD="android/app/proguard-rules.pro";
ANDROID_BUCK="android/app/BUCK";
ANDROID_BUILD_GRADLE="android/app/build.gradle";
ANDROID_MANIFEST="android/app/src/main/AndroidManifest.xml";
ANDROID_MAIN_JAVA_PATH="android/app/src/main/java";

# USER INPUTS
OLD_BUNDLE_ID=$1
NEW_BUNDLE_ID=$2


echo "${INFO_COLOR}MODIFYING BUNDLE ID";
echo "================================================================="
echo "OLD BUNDLE ID: ${OLD_BUNDLE_ID}";
echo "NEW BUNDLE ID: ${NEW_BUNDLE_ID}";
echo "=================================================================${NO_COLOR}"


# FASTLANE FLOW


# FILES TO BE CHANGED:
# - fastlane/Fastfile
# - fastlane/Appfile

echo "${FASTLANE_COLOR}IOS FLOW STARTED${NO_COLOR}";
echo "STARTED MODIFYING $FL_FASTFILE_PATH::: $OLD_BUNDLE_ID >>> $NEW_BUNDLE_ID";

sed -i '' "s/$OLD_BUNDLE_ID/$NEW_BUNDLE_ID/g" $FL_FASTFILE_PATH;

echo "ENDED MODIFYING $FL_FASTFILE_PATH::: $OLD_BUNDLE_ID >>> $NEW_BUNDLE_ID";

echo "STARTED MODIFYING $FL_APPFILE_PATH::: $OLD_BUNDLE_ID >>> $NEW_BUNDLE_ID";

sed -i '' "s/$OLD_BUNDLE_ID/$NEW_BUNDLE_ID/g" $FL_APPFILE_PATH;

echo "ENDED MODIFYING $FL_APPFILE_PATH::: $OLD_BUNDLE_ID >>> $NEW_BUNDLE_ID";


# IOS FLOW


# FILES TO BE CHANGED:
# - ios/rn_starter.xcodeproj/project.pbxproj

echo "${IOS_COLOR}IOS FLOW STARTED${NO_COLOR}";
echo "STARTED MODIFYING $IOS_PBXPROJ_PATH::: $OLD_BUNDLE_ID >>> $NEW_BUNDLE_ID";

sed -i '' "s/$OLD_BUNDLE_ID/$NEW_BUNDLE_ID/g" $IOS_PBXPROJ_PATH;

echo "ENDED MODIFYING $IOS_PBXPROJ_PATH::: $OLD_BUNDLE_ID >>> $NEW_BUNDLE_ID";
