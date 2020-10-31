# COLOR VARIABLES

INFO_COLOR='\033[0;33m';
ANDROID_COLOR='\033[0;32m';
NO_COLOR='\033[0m';

# ANDROID FILES

ANDROID_PROGUARD="android/app/proguard-rules.pro";
ANDROID_BUCK="android/app/BUCK";
ANDROID_BUILD_GRADLE="android/app/build.gradle";
ANDROID_MANIFEST="android/app/src/main/AndroidManifest.xml";
ANDROID_MAIN_JAVA_PATH="android/app/src/main/java";
ANDROID_DEBUG_JAVA_PATH="android/app/src/debug/java";

# USER INPUTS
OLD_BUNDLE_ID=$1
NEW_BUNDLE_ID=$2


echo "${INFO_COLOR}MODIFYING BUNDLE ID";
echo "================================================================="
echo "OLD BUNDLE ID: ${OLD_BUNDLE_ID}";
echo "NEW BUNDLE ID: ${NEW_BUNDLE_ID}";
echo "=================================================================${NO_COLOR}"

# ANDROID FLOW


# FILES TO BE CHANGED:
# - android/app/proguard-rules.pro
# - android/app/BUCK
# - android/app/build.gradle
# - android/app/src/main/AndroidManifest.xml
# - android/app/src/main/java/${OLD_BUNDLE_ID}/MainActivity.java ->
# > android/app/src/main/java/${NEW_BUNDLE_ID}/MainActivity.java
# - android/app/src/main/java/${OLD_BUNDLE_ID}/MainApplication.java ->
# > android/app/src/main/java/${NEW_BUNDLE_ID}/MainApplication.java

# > android/app/src/debug/java/${NEW_BUNDLE_ID}/ReactNativeFlipper.java

echo "${ANDROID_COLOR}ANDROID FLOW STARTED${NO_COLOR}";

# # # TODO: FIX ISSUE WITH PART OF WORD REPLACING!!!

echo "changing ${ANDROID_PROGUARD}";
sed -i '' "s/$OLD_BUNDLE_ID/$NEW_BUNDLE_ID/g" $ANDROID_PROGUARD;
echo "changing ${ANDROID_BUCK}";
sed -i '' "s/$OLD_BUNDLE_ID/$NEW_BUNDLE_ID/g" $ANDROID_BUCK;
echo "changing ${ANDROID_BUILD_GRADLE}";
sed -i '' "s/$OLD_BUNDLE_ID/$NEW_BUNDLE_ID/g" $ANDROID_BUILD_GRADLE;
echo "changing ${ANDROID_MANIFEST}";
sed -i '' "s/$OLD_BUNDLE_ID/$NEW_BUNDLE_ID/g" $ANDROID_MANIFEST;


cd $ANDROID_MAIN_JAVA_PATH;
IFS='.' read -r -a OLD_BUNDLE_ARR <<< "$OLD_BUNDLE_ID"
IFS='.' read -r -a NEW_BUNDLE_ARR <<< "$NEW_BUNDLE_ID"
OLD_ROUTE="./";
for i in "${OLD_BUNDLE_ARR[@]}"
do
	OLD_ROUTE+="${i}/"
done

OLD_ROUTE_ACTIVITY="${OLD_ROUTE}MainActivity.java";
OLD_ROUTE_APPLICATION="${OLD_ROUTE}MainApplication.java";

echo "OLD_ROUTE: ${OLD_ROUTE}";
echo "OLD_ROUTE_ACTIVITY: ${OLD_ROUTE_ACTIVITY}";
echo "OLD_ROUTE_APPLICATION: ${OLD_ROUTE_APPLICATION}";

sed -i '' "s/$OLD_BUNDLE_ID/$NEW_BUNDLE_ID/g" $OLD_ROUTE_ACTIVITY;
sed -i '' "s/$OLD_BUNDLE_ID/$NEW_BUNDLE_ID/g" $OLD_ROUTE_APPLICATION;

NEW_ROUTE="./";
for i in "${NEW_BUNDLE_ARR[@]}"
do
	NEW_ROUTE+="${i}/"
done

NEW_ROUTE_ACTIVITY="${NEW_ROUTE}MainActivity.java";
NEW_ROUTE_APPLICATION="${NEW_ROUTE}MainApplication.java";

echo "NEW_ROUTE: ${NEW_ROUTE}";
echo "NEW_ROUTE_ACTIVITY: ${NEW_ROUTE_ACTIVITY}";
echo "NEW_ROUTE_APPLICATION: ${NEW_ROUTE_APPLICATION}";


echo "creating new directory ${NEW_ROUTE}";
mkdir -p "$(dirname "$NEW_ROUTE/suffix")"
echo "moving ${OLD_ROUTE_ACTIVITY} to ${NEW_ROUTE_ACTIVITY}";
mv $OLD_ROUTE_ACTIVITY $NEW_ROUTE_ACTIVITY;
echo "moving ${OLD_ROUTE_APPLICATION} to ${NEW_ROUTE_APPLICATION}";
mv $OLD_ROUTE_APPLICATION $NEW_ROUTE_APPLICATION;

cd -
cd $ANDROID_DEBUG_JAVA_PATH;
IFS='.' read -r -a OLD_BUNDLE_ARR <<< "$OLD_BUNDLE_ID"
IFS='.' read -r -a NEW_BUNDLE_ARR <<< "$NEW_BUNDLE_ID"
OLD_ROUTE="./";
for i in "${OLD_BUNDLE_ARR[@]}"
do
	OLD_ROUTE+="${i}/"
done


OLD_ROUTE_FLIPPER="${OLD_ROUTE}ReactNativeFlipper.java";

echo "OLD_ROUTE: ${OLD_ROUTE}";
echo "OLD_ROUTE_FLIPPER: ${OLD_ROUTE_FLIPPER}";

sed -i '' "s/$OLD_BUNDLE_ID/$NEW_BUNDLE_ID/g" $OLD_ROUTE_FLIPPER;


NEW_ROUTE="./";
for i in "${NEW_BUNDLE_ARR[@]}"
do
	NEW_ROUTE+="${i}/"
done

NEW_ROUTE_FLIPPER="${NEW_ROUTE}ReactNativeFlipper.java";

echo "NEW_ROUTE: ${NEW_ROUTE}";
echo "NEW_ROUTE_FLIPPER: ${NEW_ROUTE_FLIPPER}";

echo "creating new directory ${NEW_ROUTE}";
mkdir -p "$(dirname "$NEW_ROUTE/suffix")"
echo "moving ${OLD_ROUTE_FLIPPER} to ${NEW_ROUTE_FLIPPER}";
mv $OLD_ROUTE_FLIPPER $NEW_ROUTE_FLIPPER;

echo "${ANDROID_COLOR}ANDROID FLOW ENDED${NO_COLOR}";
