#alive.css

A comprehensive css animation library built with SASS and optimized for performance. Each animation has been created to be as close to 60 fps as possible.

##Usage
Simply add the animate.css stylesheet into your document's `<head>` and add the class name of the animation you would like to any element. You can also trigger animations with javascript:

```javascript
$(el).addClass('fadeInDown');
```

You can also detect when an animation ends:

```javascript
$(el).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', fn());
```

alive.css is built with SASS and gulp. To get things rolling simply do the following:

```sh
$ cd path/to/alive.css/
$ sudo npm install
$ sudo gulp
```

You can tell alive.css which animations to load with the `settings.scss` file. This allows you to keep your stylesheet small and only use the animations you really need.

## License
alive.css is licensed under the MIT license. (http://opensource.org/licenses/MIT)
