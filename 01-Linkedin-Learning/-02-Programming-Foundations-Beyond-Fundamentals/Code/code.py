#---------- Section 01 ----------#

cities = ['Tokyo', 'Daka', 'Mumbai', 'buenos Aires']
print(cities[1])

california_symbols = {
    'bird': 'California quail',
    'animal': 'Grizzly bear',
    'flower': 'California poppy',
    'fruit': 'Avocado'
}
print(california_symbols['flower'])

#---------- Section 02 ----------#

spices = ['salt', 'pepper', 'cumin', 'turmeric']
for spice in spices:
    print(spice)

print("No more boring omelettes!")

#----------------------#

i = 5
while i <= 100:
    print("Less the 100")
    i += 5
print("List completed")

#----------------------#

import testmodule
testmodule.mult(10, 5)

#------------- Section 04 ------------#

value = input('Enter a number: ')
print(value + ' is my favorite number!')
print('When you multiply it by 10, this is what you get:')
value_int = int(value)
print(value * 10)

#---------------------#

first_name = 'malala'
last_name = 'yousafzai'
note = 'award: Nobel Peace Prize'
first_name_cap = first_name.capitalize()
last_name_cap = last_name.capitalize()
print(first_name_cap)
print(last_name_cap)
award_location = note.find('award: ')
print(award_location)

award_text = note[7:]
print(award_text)

#---------------------#

import re

five_digit_zip = '98101'
nine_digit_zip = '98101-0003'
phone_number = '234-567-8901'
five_digit_expression = r'\d{5}'
print(re.search(five_digit_expression, five_digit_zip))
print(re.search(five_digit_expression, nine_digit_zip))
print(re.search(five_digit_expression, phone_number))

#---------------------#

infile = open('values.txt', 'rt')
outfile = open('values-totaled.txt', 'wt')
print('Processing input')
sum2 = 0
for line in infile:
    sum2 += int(line)
    print(line.rstrip(), file=outfile)

print('\nTotal: ' + str(sum2), file=outfile)
outfile.close()
print("Output complete")

#---------------------#

class Attendee:
    """Common base class for all attendees"""

    def __init__(self, name, tickets):
        self.name = name
        self.tickets = tickets

    def display_attendee(self):
        print('Name: {}, Tickets: {}', format(self.name, self.tickets))

    def add_ticket(self):
        self.tickets += 1
        print('{} tickets increased to {}', format(self.name, self.tickets))


attendee1 = Attendee('Amr Khalid', 2)
