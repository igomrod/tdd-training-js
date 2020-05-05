class FizzBuzz {

    isFizz(number) {
        return (number % 3 === 0) || 
                (number.toString().includes("3"))
    }

    isBuzz(number) {
        return (number % 5 === 0) || 
                (number.toString().includes("5"))
    }

    isFizzBuzz(number) {
        return this.isFizz(number) && this.isBuzz(number) 
    }

    execute(number) {
        if (typeof(number) !== "number" || number < 1 || number > 100)  {
            return "Error: Input must be between 1..100"
        }

        if (this.isFizzBuzz(number)) 
            return 'FizzBuzz'
        
        if (this.isFizz(number)) 
            return 'Fizz'

        if (this.isBuzz(number))
            return 'Buzz'

        return number
    }
}

module.exports.FizzBuzz = FizzBuzz;