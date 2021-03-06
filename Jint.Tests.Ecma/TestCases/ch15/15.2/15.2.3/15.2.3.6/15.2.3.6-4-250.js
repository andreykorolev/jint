/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-250.js
 * @description Object.defineProperty - 'O' is an Array, 'name' is an array index named property, 'name' is data property and 'desc' is data descriptor, and the [[Configurable]] attribute value of 'name' is false, test TypeError is thrown if the [[Writable]] attribute value of 'name' is false, and the [[Value]] field of 'desc' and the [[Value]] attribute value of 'name' are two booleans with different values (15.4.5.1 step 4.c)
 */


function testcase() {
        var arrObj = [];

        Object.defineProperty(arrObj, "1", {
            value: false
        });

        try {
            Object.defineProperty(arrObj, "1", {
                value: true
            });

            return false;
        } catch (e) {
            return e instanceof TypeError && dataPropertyAttributesAreCorrect(arrObj, "1", false, false, false, false);
        }
    }
runTestCase(testcase);
