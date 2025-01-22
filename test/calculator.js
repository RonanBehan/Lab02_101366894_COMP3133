const { add, sub, mul, div } = require("../calculator");

describe("Calculator Tests", async () => {
    let chai;

    before(async () => {
        chai = await import("chai");
    });

    const { expect } = chai;

    it("should add numbers correctly", () => {
        expect(add(5, 2)).to.equal(7);
    });

    it("should fail to add numbers", () => {
        expect(add(5, 2)).to.not.equal(8);
    });

    it("should subtract numbers correctly", () => {
        expect(sub(5, 2)).to.equal(3);
    });

    it("should fail to subtract numbers", () => {
        expect(sub(5, 2)).to.not.equal(5);
    });

    it("should multiply numbers correctly", () => {
        expect(mul(5, 2)).to.equal(10);
    });

    it("should fail to multiply numbers", () => {
        expect(mul(5, 2)).to.not.equal(12);
    });

    it("should divide numbers correctly", () => {
        expect(div(10, 2)).to.equal(5);
    });

    it("should fail to divide numbers", () => {
        expect(div(10, 2)).to.not.equal(2);
    });

    it("should throw an error when dividing by zero", () => {
        expect(() => div(10, 0)).to.throw("Cannot divide by zero");
    });
});
