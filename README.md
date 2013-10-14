# JS-SPY

## Purpose

Very first draft of method that helps spy what properties of an object are being used

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

