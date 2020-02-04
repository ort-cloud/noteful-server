process.env.TZ = 'UTC'; //set timezone to fix date/time issues
require('dotenv').config();
const { expect } = require('chai');
const supertest = require('supertest');

global.expect = expect;
global.supertest = supertest;
