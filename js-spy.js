// Spy Function
function spyProperties (debugNamespace, objectReference) {

    Object.keys(objectReference).forEach(function (property) {

      // 1. Store original value as __<propertyName>
      user['__' + property] = user[property];
      // 1. Reset property to undefined
      user[property]        = undefined;

      // 2. Define spy (will write debug info into console and return original value)
      Object.defineProperty(user, property, {
        get: function () {

          // 2.1. Write debug info into console
          console.debug('[Property Usage] %debugNamespace.%property'.replace('%debugNamespace', debugNamespace).replace('%property', property));

          // 2.2. Return original value
          return user['__' + property];

        }
      });
    });
}