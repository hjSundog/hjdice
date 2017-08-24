# hjdice
a dice for trpg game
## Usage
```Shell
> npm install hjdice
```

```Javascript
import Dice from 'hjdice';
// or 
var Dice = require('hjdice')

var dice = new hjdice();
dice.roll(); // 1-6
dice.getDesc(); // 1d6 + 0
```
### new Dice([config])
`config` the config for dice

the default is
```Javascript
var _config = {
  dice_amount: 1,
  offset: 0,
  dice_faces: 6
};
``` 

