# react-native-material-dropdown


## Features

* Easy to use
* Consistent look and feel on iOS and Android
* Customizable font size, colors and animation duration
* Dynamic dropdown size and position
* Configurable visible item count
* RTL support
* Pure javascript implementation

## Installation

```bash
npm install --save react-native-material-dropdown
```

## Usage

```javascript
import React, { Component } from 'react';
import {
  Dropdown,
} from "src/components";

class Example extends Component {
  render() {
    let data = [{
      label: "Banana Pi",
      value: "Banana",
    }, {
      label: 'Mango OS',
      value: 'Mango',
    }, {
      label: 'Pear OS',
      value: 'Pear',
    }];

    return (
      <Dropdown
        label='Favorite Fruit'
        data={data}
        selected={"Pear"}
        data={data}
        onChangeText={(value) => {
          setOS(value);
        }}
        onPressValue={(index) => {
          setSelectedOSIndex(index)
        }}
      />
    );
  }
}
```

## Properties

 name              | description                                   | type     | default
:----------------- |:--------------------------------------------- | --------:|:------------------
 label             | Text field label text                         |   String | -
 animationDuration | Text field animation duration in ms           |   Number | 225
 fontSize          | Text field font size                          |   Number | 16
 baseColor         | Text field base color                         |   String | rgba(0, 0, 0, .38)
 textColor         | Text field text color                         |   String | rgba(0, 0, 0, .87)
 itemColor         | Dropdown item text color (inactive item)      |   String | rgba(0, 0, 0, .54)
 selectedItemColor | Dropdown item text color (active item)        |   String | rgba(0, 0, 0, .87)
 disabledItemColor | Dropdown item text color (disabled item)      |   String | rgba(0, 0, 0, .38)
 dropdownPosition  | Dropdown position (dynamic if undefined)      |   Number | -
 itemCount         | Dropdown visible item count                   |   Number | 4
 itemPadding       | Dropdown item vertical padding                |   Number | 8
 itemTextStyle     | Dropdown item text styles                     |   Object | -
 dropdownOffset    | Dropdown offset                               |   Object | { top: 32, left: 0 }
 dropdownMargins   | Dropdown margins                              |   Object | { min: 8, max: 16 }
 data              | Dropdown item data                            |    Array | []
 value             | Selected value                                |   String | -
 containerStyle    | Styles for container view                     |   Object | -
 overlayStyle      | Styles for overlay view                       |   Object | -
 pickerStyle       | Styles for item picker view                   |   Object | -
 shadeOpacity      | Shade opacity for dropdown items              |   Number | 0.12
 rippleInsets      | Insets for ripple on base component           |   Object | { top: 16, bottom: -8 }
 renderBase        | Render base component                         | Function | -
 renderAccessory   | Render text field accessory                   | Function | -
 valueExtractor    | Extract value from item (args: item, index)   | Function | ({ value }) => value
 labelExtractor    | Extract label from item (args: item, index)   | Function | ({ label }) => label
 propsExtractor    | Extract props from item (args: item, index)   | Function | () => null
 onChangeText      | Selection callback (args: value, index, data) | Function | -

Other [TextField][textfield], [TextInput][textinput] and [TouchableWithoutFeedback][touchable] properties will also work

## Methods

 name            | description                    | returns
:--------------- |:------------------------------ |:--------
 blur()          | Release focus (close dropdown) | -
 value()         | Get current value              | String
 selectedIndex() | Get selected index             | Number
 isFocused()     | Get current focus state        | Boolean
