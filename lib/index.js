/**
  * @module HelloWorldLib
  *
  * TODO: Add Description
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const HelloworldController = require('./Controllers/HelloworldController');
const HelloworldResponse = require('./Models/HelloworldResponse');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of HelloWorldLib
    Configuration,
    Environments,
    // controllers of HelloWorldLib
    HelloworldController,
    // models of HelloWorldLib
    HelloworldResponse,
    // exceptions of HelloWorldLib
    APIException,
};

module.exports = initializer;
