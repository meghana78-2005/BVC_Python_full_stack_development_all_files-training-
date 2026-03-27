import random

print("🎮 Welcome to the Number Guessing Game!")
print("I am thinking of a number between 1 and 100.")

while True:
    number = random.randint(1, 100)
    attempts = 0
    max_attempts = 7

    while attempts < max_attempts:
        try:
            guess = int(input("Enter your guess: "))
            attempts += 1

            if guess < number:
                print("Too low! Try again.")
            elif guess > number:
                print("Too high! Try again.")
            else:
                print("🎉 Congratulations! You guessed it correctly!")
                print("Attempts used:", attempts)
                break

        except ValueError:
            print("⚠️ Please enter a valid number.")

    else:
        print("❌ You ran out of attempts!")
        print("The correct number was:", number)

    play_again = input("Do you want to play again? (yes/no): ").lower()
    if play_again != "yes":
        print("Thanks for playing! 👋")
        break