# SETUP FASTLANE

1. Edit `fastlane/Appfile` file:

- Set `apple_id` - it is your developer account email;
- Set `team_id` - can be found under account preference at `developer.apple.com`;
- Set `app_identifier` (optional - can be done via `change_bundle_id.sh` script also) - it is `com.starter` now;

1. Edit `fastlane/Fastfile` file:

- Set `DEV_PROFILE`, `STAGE_PROFILE`, `PREPROD_PROFILE`, `PROD_PROFILE` - this is your provisioning profiles for corresponding environments; Place here name that was entered while creating profile at `developer.apple.com`.

- Set `DEV_BUNDLE_ID`, `STAGE_BUNDLE_ID`, `PREPROD_BUNDLE_ID`, `PROD_BUNDLE_ID` (optional - can be done via `change_bundle_id.sh` script also) - it is `com.starter` now;

## USE FASTLANE

All commands must be executed from the root of the project.

1. iOS builds assembling:

- For `dev` environment - run `fastlane ios dev` from project root;
- For `stage` environment - run `fastlane ios stage` from project root;
- For `preprod` environment - run `fastlane ios preprod` from project root;
- For `prod` environment - run `fastlane ios prod` from project root;

1. Android builds assembling:

- For `dev` environment - run `fastlane android dev` from project root;
- For `stage` environment - run `fastlane android stage` from project root;
- For `preprod` environment - run `fastlane android preprod` from project root;
- For `prod` environment - run `fastlane android prod` from project root;
