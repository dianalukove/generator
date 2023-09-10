const { Triangle, Square, Circle } = require("./lib/shape");
const fs = require("fs");
const inquirer = require("inquirer");
class Svg {
    constructor() {
      this.textElement = "";
      this.shapeElement = "";
    }
  
    render() {
      return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${this.shapeElement}
      ${this.textElement}
      </svg>`;
    }
  
    //generate SVG text element
    setTextElement(text, color) {
      this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }
    //generate SVG shape element
    setShapeElement(shape, color) {
      shape.setColor(color); // Set the color of the shape
      this.shapeElement = shape.render();
    }
  //reset the SVG generator
  clearElements() {
    this.textElement = "";
    this.shapeElement = "";
  }
}




















