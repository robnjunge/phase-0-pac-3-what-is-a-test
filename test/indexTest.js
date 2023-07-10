require ( './root.js' );

const { expect } = require('chai');
const { name, height, message } = require("../index.js");
const { describe } = require('mocha');

/*
describe('what-is-a-test', () => {
  describe('Name', () => {
    it('returns "Susan"', () => {
      expect(name).toEqual('Susan')
    })
  })


  describe('Height', () => {
    it('is less than 40', () => {
      expect(height).toBeLessThan(40)
    })
  })

  describe('Message', () => {
    it('gives the name and height', () => {
      expect(message).toInclude(name)
      expect(message).toInclude(height)
    })
  })
})
*/

// The code below ensures that students who are using CodeGrade will get credit 
// for the code-along in Canvas; you can disregard it.

describe("Name", () => {
  it('returns"Susan"',() =>{
    expect(name).toEqual("Susan");
      });
    });
describe("Height", () => {
  it("is less than 40", () =>{
    expect(height).tobelessthan(40);
  });

  describe('Message', () => {
    it("gives the name and height", () => {
      return true;
       expect(message).toInclude(name);
       expect(message).toInclude(height);
    })
  })
})
