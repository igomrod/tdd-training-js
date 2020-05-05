let assert = require('assert');
let FizzBuzz = require('../src/fizz_buzz').FizzBuzz;

describe('FizzBuzz', function() {

  it('should_return_error_when_input_is_out_of_range', function() {
    // Arrange
    let fizzBuzz = new FizzBuzz();

    // Act

    // Assert
    assert.equal(fizzBuzz.execute(0), "Error: Input must be between 1..100");
    assert.equal(fizzBuzz.execute(101), "Error: Input must be between 1..100");

  });

  it('should_return_error_when_input_is_NaN', function() {
    // Arrange
    let fizzBuzz = new FizzBuzz();

    // Act

    // Assert
    assert.equal(fizzBuzz.execute("aaaa"), "Error: Input must be between 1..100");

  });

  it('should_return_same_number_when_input_is_not_multiply_of_3_or_5', function() {
    // Arrange
    let fizzBuzz = new FizzBuzz();

    // Act
    ret = fizzBuzz.execute(1)

    // Assert
    assert.equal(fizzBuzz.execute(1), 1);
    assert.equal(fizzBuzz.execute(2), 2);
    assert.equal(fizzBuzz.execute(7), 7);

  });

  it('should_return_Fizz_when_input_is_multiply_of_3', function() {
    // Arrange
    let fizzBuzz = new FizzBuzz();

    // Act

    // Assert
    assert.equal(fizzBuzz.execute(3), "Fizz");
    assert.equal(fizzBuzz.execute(6), "Fizz");
    assert.equal(fizzBuzz.execute(9), "Fizz");
    assert.equal(fizzBuzz.execute(21), "Fizz");
  });

  it('should_return_Buzz_when_input_is_multiply_of_5', function() {
    // Arrange
    let fizzBuzz = new FizzBuzz();

    // Act

    // Assert
    assert.equal(fizzBuzz.execute(5), "Buzz");
    assert.equal(fizzBuzz.execute(10), "Buzz");
    assert.equal(fizzBuzz.execute(50), "Buzz");
  });


  it('should_return_FizzBuzz_when_input_is_multiply_of_5_and_3', function() {
    // Arrange
    let fizzBuzz = new FizzBuzz();

    // Act

    // Assert
    assert.equal(fizzBuzz.execute(15), "FizzBuzz");
  });


  it('should_return_Fizz_when_input_contains_3', function() {
    // Arrange
    let fizzBuzz = new FizzBuzz();

    // Act

    // Assert
    assert.equal(fizzBuzz.execute(3), "Fizz");
    assert.equal(fizzBuzz.execute(13), "Fizz");
    assert.equal(fizzBuzz.execute(33), "Fizz");
  });

  it('should_return_Buzz_when_input_contains_5', function() {
    // Arrange
    let fizzBuzz = new FizzBuzz();

    // Act

    // Assert
    assert.equal(fizzBuzz.execute(5), "Buzz");
    assert.equal(fizzBuzz.execute(50), "Buzz");
  });

  it('should_return_Buzz_when_input_contains_5_and_3', function() {
    // Arrange
    let fizzBuzz = new FizzBuzz();

    // Act

    // Assert
    assert.equal(fizzBuzz.execute(35), "FizzBuzz");
    assert.equal(fizzBuzz.execute(53), "FizzBuzz");
  });







  it('should_return_Fizz_when_input_is_multiply_of_3', function() {
    // Arrange
    let fizzBuzz = new FizzBuzz();

    // Act
    list = fizzBuzz.execute()

    // Assert
    assert.equal(list[2], "Fizz");

  });


  it('should_return_Fizz_when_input_is_multiply_of_3', function() {
    // Arrange
    let fizzBuzz = new FizzBuzz();

    // Act
    list = fizzBuzz.execute()

    // Assert
    assert.equal(list.size(), 100);

  });

});