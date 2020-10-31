# GENERAL CODE STYLE REQUIREMENTS

1. Strings should be written using `double quotes` (e.g. "some string");
1. Naming - `lowerCamelCase`:
1. Environment for development (IDE) should support `eslint` and `flow`, all code should be covered, git hooks must be setup;
1. Generic components (e.g. `Text`, `TextInput`, `Image` e.t.c.) should be imported from `src/components`;
1. All defined dimensions (width, height, font size) must be wrapped in corresponding scale functions from `src/utils/layout`
1. For requests must be used module from `src/utils/requests/base_requests`. All requests must be grouped by in nested folders in `src/utils/requests`
1. For all text i18n need to be used. Texts should be stored in `src/i18n/translations/<language>.json`;
1. For containers with forms use `src/components/keyboard_wrapper` module as container wrapper;
1. All configurations should be stored in configs folder, e.g;
  Regular expressions - `src/config/regexp_config.js`;
  Date formats (e.g. "YYYY-MM-DD") - `src/config/date_formats.js`
  Fonts - `src/configs/styles/fonts.js`;
  Colors - `src/configs/styles/colors.js`; Naming convention does not support such names as "grey-2", "grey_2", "Gray-2", "Gray_2"; All names should be in UPPER_CASE; each color should have unique naming; In order to get correct color naming - please use <http://chir.ag/projects/name-that-color> service
1. For date processing prefer to use `moment.js`;
1. Code should be covered with comments; Especially - if there is some specific logic or a lot of it;
1. Order of import is: React, modules (npm / external), custom modules (internal), configs, styles, types.
  Prefer to sort in alphabet order when import more than one component or method from module

## NEED TO BE DISCUSS

1. All configurations (API, external services) should be stored in `env` folder for corresponding scheme/productFlavor;
1. API endpoints are stored in `src/config/main_config.js`. These are not stored in `env` module;
1. Components should be `dumb`; Only smart components in application are `containers`;
1. There should be no date-parsing code in container/components; All interaction with `moment.js` should be done in separated `helper` modules;
1. Orientation support provided by `src/utils/orientation` module; Please use only this module. Any different solutions should be discussed - do we need this module?;
