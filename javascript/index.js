class Tetris {
    constructor(imageX, imageY, template) {
        this.imageX = imageX;
        this.imageY = imageY;
        this.template = template;
    }

    checkBottom() {

    }

    checkLeft() {

    }

    checkRight() {

    }

    moveRight() {

    }

    moveLeft() {

    }

    moveBottom() {

    }

    changeRotation() {

    }

}

const imageSquareSize = 24;
const size = 40;
const framePerSecond = 60;
const gameSpeed = 5;
const canvas = document.getElementById('canvas');

const image = document.getElementById('image');

const ctx = canvas.getContext("2d");

const squareCountX = canvas.width / size;
const squareCountY = canvas.height / size;
const shapes = [
    new Tetris(0, 120, [
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0]
    ]),
    new Tetris(0, 96, [
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 1]
    ]),
    new Tetris(0, 72, [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1]
    ]),
    new Tetris(0, 48, [
        [0, 0, 0],
        [0, 1, 1],
        [1, 1, 0]
    ]),
    new Tetris(0, 48, [
        [0, 0, 0],
        [1, 1, 0],
        [0, 1, 1]
    ]),
    new Tetris(0, 24, [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],

    ]),
    new Tetris(0, 0, [
        [1, 1],
        [1, 1]
    ]),
]

let gameMap;
let gameOver;
let currentShape;
let nextShape;
let score = 0;
let initial2DArray;

let gameLoop = () => {
    setInterval(update, 1000 / gameSpeed);
    setInterval(draw, 1000 / framePerSecond);
}

let update = () => {

}

let draw = () => {

}

let getRamdomShape = () => {
    return Object.create(shapes[Math.floor(Math.random() * shapes.length)]);
}

let resetVars = () => {
    initial2DArray = []
    for (let i = 0; i < squareCountY; i++) {
        for (let j = 0; j < squareCountX; j++) {
            temp.push({ imageX: -1, imageY: -1 });
        }
        initial2DArray.push(temp);
    }
    score = 0;
    gameOver = false;
    currentShape = getRamdomShape();
    nextShape = getRamdomShape();
    gameMap = initial2DArray;
}

gameLoop();