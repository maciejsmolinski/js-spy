# JS-SPY

## Purpose

Very first draft of method that helps spy what properties of an object are being used

## Sample Code

1) Define object which properties you want to spy
```
// Object to be spied, can be Modernizr library for example
var user = { name: 'Maciej', surname: 'Smolinski', fullName: 'Maciej Smolinski' };
```

2) Spy properties
```
// Spy Properties of user object, debug info to be namespaced with 'user'
spyProperties('user', user);
```

3) Use object as usual
```
console.log('Full Name is: ' + user.name + ' ' + user.surname);
```

4) Watch debug info in the console!
```
[Property Usage] user.name
[Property Usage] user.surname
```

That's about it!

