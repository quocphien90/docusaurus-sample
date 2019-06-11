---
id: version-1.0.0-alert
title: Alert
sidebar_label: Alert
original_id: alert
---

## Overview
![Favicon](../../img/alert.PNG)

|Number|	Description|
| --- | --- |
|1|Success alert|	
|2|Error alert|
|3|Display text|



## Constructor
**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|No|The object contains params of constructor.|
|options.text|String|Yes|The content of alert.|
|options.type|String|No|The type of alert: <ul><li> 'error' </li><li> 'success' </li></ul> Default value is 'error'. |
|options.isDisabled|Boolean|No|The alert will be disabled. <br> Default value: 'false'|
|options.isVisible|Boolean|No|The alert will be visible. <br> Default value: 'true'|

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
var alert = new kintoneUIComponent.Alert({text: 'Network error', type: 'error'});
```
<!--ReactJS-->
```jsx
import { Alert } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Alert text='Network error' type='error'/>
        );
    }
}
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Methods
### render()
Get dom element of component.

**Parameter**

None

**Returns**

Dom element

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
var alert = new kintoneUIComponent.Alert({text: 'Network error', type: 'error'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
```
<!--ReactJS-->
```jsx
import { Alert} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Alert text='Network error' type='error'/>
        );
    }
}
```
<!--END_DOCUSAURUS_CODE_TABS-->

### setText(text)
Set the content of alert.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|text|	String|	Yes|The content of alert. <br> If text is undefined, null or true, The alert will be displayed blank.|

**Returns**

None

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
var alert = new kintoneUIComponent.Alert({text: 'Network error', type: 'error'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
alert.setText('Network error');
```
<!--ReactJS-->
```jsx
import { Alert } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Alert text='Network error' type='error'/>
        );
    }
}
```
<!--END_DOCUSAURUS_CODE_TABS-->

### setType(type)
Set the type of alert.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|type|	String|	No| The type of alert. <ul><li>"success": success alert.</li><li>"error": error alert </li></ul> Default value is "error".|

**Returns**

None

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
var alert = new kintoneUIComponent.Alert({text: 'Network error', type: 'error'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
alert.setType('success');
```
<!--ReactJS-->
```jsx
import { Alert } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Alert text='Network error' type='error'/>
        );
    }
}      
```
<!--END_DOCUSAURUS_CODE_TABS-->

### on(eventName, callBack)
The callBack function will be execute after user click the alert.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|eventName|	String|	Yes|Name of event: <ul><li>'click'</li></ul>|
|callback|function |Yes|callback|

**Returns**

None

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
var alert = new kintoneUIComponent.Alert({text: 'Network error', type: 'error'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
alert.on('click', function(event) {
    console.log('on click');
});
```
<!--ReactJS-->
```jsx
import { Alert } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Alert text='Network error' type='error' onClick={this.handleClick}/>
        );
    }
   handleClick(){
        console.log('click');
   }
}
    
```
<!--END_DOCUSAURUS_CODE_TABS-->

### show()
Display the Alert.

**Parameter**

None

**Returns**

None

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
var alert = new kintoneUIComponent.Alert({text: 'Network error', type: 'error'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
alert.show();
```
<!--ReactJS-->
```jsx
import { Alert } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Alert text='Network error' type='error' isVisible={true}/>
        );
    }
}   
```
<!--END_DOCUSAURUS_CODE_TABS-->

### hide()
Hide the Alert.

**Parameter**

None

**Returns**

None

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
var alert = new kintoneUIComponent.Alert({text: 'Network error', type: 'error'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
alert.hide();
```
<!--ReactJS-->
```jsx
import { Alert } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Alert text='Network error' type='error' isVisible={false}/>
        );
    }
}   
```
<!--END_DOCUSAURUS_CODE_TABS-->

### disable()
Disable the Alert.

**Parameter**

None

**Returns**

None

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
var alert = new kintoneUIComponent.Alert({text: 'Network error', type: 'error'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
alert.disable();
```
<!--ReactJS-->
```jsx
import { Alert } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Alert text='Network error' type='error' isDisabled={true}/>
        );
    }
}  
```
<!--END_DOCUSAURUS_CODE_TABS-->

### enable()
Enable the Alert.

**Parameter**

None

**Returns**

None

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
var alert = new kintoneUIComponent.Alert({text: 'Network error', type: 'error'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(alert.render());
alert.enable();
```
<!--ReactJS-->
```jsx
import { Alert } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <Alert text='Network error' type='error' isDisabled={false}/>
        );
    }
}  
```
<!--END_DOCUSAURUS_CODE_TABS-->
