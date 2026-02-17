/*
* File: calcArea.spec.js
* Author: Szabó József
* Copyright: 2026, Szabó József
* Group: Szoft I/N
* Date: 2026-02-17
* Github: https://github.com/CWGSkyStone/SzoftTesztDolgozat
* Licenc: MIT
*/
import { expect } from "chai";
import { calcArea } from "../src/tools.js";

describe("calcArea()", () => {
    it("in: 1, out: 1.72", () => {
        const actual = calcArea(1);
        const expected = 1.72;
        expect(actual).closeTo(expected, 0.01);
    });
    it("in: 5, out: 43.01", () => {
        const actual = calcArea(5);
        const expected = 43.01;
        expect(actual).closeTo(expected, 0.01);
    });
    it("in: 1e53, határérték, out: 1.7204774005889668e+106",() => {
        const actual = calcArea(1e53);
        const expected = 1.7204774005889668e+106;
        expect(actual, expected)
    });
    it("in: 0.0000001, határérték, out: ",() => {
        const actual = calcArea(0.0000001);
        const expected = 1.7204774005889668e-14;
        expect(actual, expected)
    });
    it("in: -5, dobjon hibát", () => {
        expect(() => calcArea(-5)).to.throw(Error);
    });
    it("in: 0, dobjon hibát", () => {
        expect(() => calcArea(0)).to.throw(Error);
    });
});