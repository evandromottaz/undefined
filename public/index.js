"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Reader_1 = __importDefault(require("./classes/Reader"));
const reader = new Reader_1.default();
const input = document.querySelector('input[type="file"]');
input.addEventListener('change', (ev) => {
    const target = ev.target;
    const file = target.files[0];
    reader.readFile(file);
});
