
# rayloading

[loading](https://ilex0208.github.io/rayloading/)

support react 16

To build the examples locally, run:

```
npm install
npm run demo
```

Then open: [localhost:3001](http://localhost:3001)

## install

```
npm install rayloading --save
```

## Usage

```js
import DotLoader from 'rayloading/lin/DotLoader';

class Example extends Component {
  render() {
    return (
      <Loader color="#FF5722" size="16px" margin="4px"/>
    );
  }
}
```

## props

### loaders
* PulseLoader
* RotateLoader
* BeatLoader
* RiseLoader
* SyncLoader
* GridLoader
* ClipLoader
* FadeLoader
* ScaleLoader
* SquareLoader
* PacmanLoader
* SkewLoader
* RingLoader
* MoonLoader
* DotLoader
* BounceLoader

### color

```js
const colors = {
  success: '#00a854',
  error: '#f04134',
  warning: '#ffbf0b',
  info: '#108ee9',
  dotred: '#ff5b05',
  orange: '#FF9800',
  deepOrange: '#FF5722',
  purple: '#9C27B0',
  deepPurple: '#673AB7'
};

```

## Browser Support

![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
IE 10+ ✔ | Chrome 4.0+ ✔ | Firefox 16.0+ ✔ | Opera 15.0+ ✔ | Safari 4.0+ ✔ |

## License

MIT
