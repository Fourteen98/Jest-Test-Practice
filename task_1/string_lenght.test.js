import stringLength from "./string_length.js";

// Now write a test for this function

describe('stringLength', () => {
    it('should return the length of the string', () => {
      expect(stringLength('string')).toBe(6);
    });
  }
);
