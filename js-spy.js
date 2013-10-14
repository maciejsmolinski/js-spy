/**
 * Spies property usage of a given object.
 *
 * Works in modern browsers only, these that support:
 * - Object.defineProperty
 * - Object.keys
 * - Array.prototype.forEach
 *
 * Be careful with IE8. Even though it supports Object.defineProperty, it's implementation is not valid.
 *
 *
 *
 * # Sample Usage
 *
 *   // Object to be spied:
 *   var user = { name: 'Maciej', surname: 'Smolinski', fullName: 'Maciej Smolinski' };
 *
 *   // Spy it's properties, debug info namespaced with 'user' label:
 *   spyProperties('user', user);
 *
 *   // Access object's properties as usual:
 *   console.log('Full Name is: ' + user.name + ' ' + user.surname);
 *
 *   // Watch debug info in the console:
 *   [Property Usage] user.name
 *   [Property Usage] user.surname
 *
 *
 * @param  {String} debugNamespace  Debugging label (namespace)
 * @param  {Object} objectReference Object which properties you want to spy
 * @return {[type]}                 [description]
 */
function spyProperties (debugNamespace, objectReference) {
  // @TODO: Spy unless already spied
  // @TODO: Detect Object.defineProperty, Object.keys and Array.prototype.forEach

  Object.keys(objectReference).forEach(function (property) {
    try {


      // Store original value as __<propertyName>
      objectReference['__' + property] = objectReference[property];
      // Reset property to undefined
      objectReference[property]        = undefined;

      // Define spy (will write debug info into console and return original value)
      Object.defineProperty(objectReference, property, {
        get: function () {

          // Write debug info into console
          console.debug('[Property Usage] %debugNamespace.%property'.replace('%debugNamespace', debugNamespace).replace('%property', property));

          // Return original value
          return objectReference['__' + property];

        }
      });

    } catch (error) {
      // The only workaround for Object.defineProperty problems in IE8

      if (objectReference['__' + property]) {
        // Restore original value
        objectReference[property]        = objectReference['__' + property];
        // Reset __<property> to undefined
        objectReference['__' + property] = undefined;
      }

    }
  });

}