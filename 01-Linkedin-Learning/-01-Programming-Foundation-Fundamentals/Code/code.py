#----------- Section 3 ------------#

cookie = 'sugar'
print(cookie)

print(3 // 2)
print(5 % 2)

###### Challenge 01 ######

print("Challenge 1:")

# A message for the user
message = "This is going to be tricky ;)"
Message = "Very tricky!"

# will print 'This is going to be trick ;'
print(message) # show the message on the screen

# Perform mathematical operations
result = 2**3
# this will print 8
print("2**3 =", result)
result = 5 - 3
# This will do nothing
#print("5 - 3 =", result)

print("Challenge complete!")

#-------------- Section 4 ---------------#

if 5 < 6:
    print("Yes, 5 is less than 6.")
    print("Everyone knows that!")
print("I'm not in the block.")

#---

plant = "Cacti"

if plant == "Cacti":
    print(plant, "don't need a lot of water")
else:
    print(plant, "love water")

print("Thanks")

#---

#-------------- Section 5 ---------------#

def say_hello():
    print("Hello, fiends!")

say_hello()

#---

def wash_car(amount_paid):
    if amount_paid == 12:
        print("Wash with tri-color foam")
        print("Rinse twice")
        print("Dry with large blow dryer")

    if amount_paid == 6:
        print("Wash with white foam")
        print("Rinse once")
        print("Air dry")

wash_car(12)

#---

def withdraw_money(current_balance, amount):
    if current_balance >= amount:
        current_balance -= amount
        return current_balance
    # if the condition was true the next line won't be executed
    print("The balance is ", current_balance)

balance = withdraw_money(100, 80)

if balance <= 50:
    print("we need to make a deposit")
else:
    print("Nothing to see here!")
