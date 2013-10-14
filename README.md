# JS-SPY

## Purpose

Very first draft of method that helps spy what properties of an object are being used on a given website. Can be useful when trying to make Modernizr as light as possible.

## Sample Code

1) First, get an object to be spied. Can be Modernizr for example. Let's define a simple one:
```
var user = { name: 'Maciej', surname: 'Smolinski', fullName: 'Maciej Smolinski' };
```

2) Spy properties of the previously defined object. Add 'user' label to debug info to be output in the console:
```
spyProperties('user', user);
```

3) Access object's properties as usual:
```
console.log('Full Name is: ' + user.name + ' ' + user.surname);
```

4) Watch debug info in the console:
```
[Property Usage] user.name
[Property Usage] user.surname
```

That's about it!

## Bonus: Simply check how jQuery works

1) Spy jQuery methods:
```
spyProperties('$', $);
spyProperties('$.fn', $.fn);
```

2) Call method you want to get an understanding of:
```
$('body').attr('class');
```

3) Watch the console output (debug):
```
// [Property Usage] $.fn
// [Property Usage] $.fn.init
// [Property Usage] $.fn.find
// [Property Usage] $.find
// [Property Usage] $.fn.pushStack
// [Property Usage] $.fn.constructor
// [Property Usage] $.fn
// [Property Usage] $.fn.init
// [Property Usage] $.merge
// [Property Usage] $.fn.length
// [Property Usage] $.fn.selector
// [Property Usage] $.fn.attr
// [Property Usage] $.attr
// [Property Usage] $.access
// [Property Usage] $.fn.length
// [Property Usage] $.type
```