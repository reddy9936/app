const { validate } = require("../../../models/customer");
//const Joi = require("joi");

describe("validate input", () => {
  it("should return an error when input is invalid", () => {
    let customer = {
      name: "ve",
      isGold: true,
      phone: "89089089",
    };
    let result = validate(customer);
    expect(result.error).toBeDefined();
  });
  it("should return an same value when input is valid", () => {
    let customer = {
      name: "venkat",
      isGold: true,
      phone: "89089089",
    };
    let result = validate(customer);
    expect(result.error).toBeUndefined();
  });
});
