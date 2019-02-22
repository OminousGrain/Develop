print('hello world')
print('putting stuff in here')
print(1)
print(True)

# to run this code be in local directory then type 'python treehousPythonBasics.py' this is better than debuggrunning


# python shell R.E.P.L READ.EVALUATE.PRINT.LOOP  In python its known as 'The Python Shell'

# to get it we put 'python' in the console

# type 'help(print)' gives us documentation on the print() function

# stdout is the place you ran the program from

# console ctrl+d and exit()


print('hello Ben')
print('ben is learning python')


# variables in python

print('***************************************************')

first_name = 'Ben'


print(first_name)
# taking multiple arguments

print('my name is ', 'ben')

print('my name is ', first_name)

print(first_name, ' is learning python')

print('***************************************************')

# user input in console

# input('prompt')

# in responding put in string form otherwise it will read it as a varaible

# mood_today = input('how are you today?')

# print('I am feeling', mood_today, ' today')
print('***************************************************')
# numbers and operators

# use round() to fix floating point numbers
print(round(0.1+0.1+0.1-0.3))
# coerce using
# int('1') => 1
# float(11) =>11.o
# int(11.9)=>11
# 23 // 3=> 7  gives int answer
# 23 % 3=> 7   gives  remainder
# print('i cant \n even')
print('i cant \n even')
print("""i cant

          even""")
print('***************************************************')
print('chocolate '+' and marshmellow')
dessert = 'icecream'
dessert = dessert + ' with chocolate sauce'
print(dessert)

dessert += ', yum'
print(dessert)

dessert += '!'*20
print(dessert)
print('***************************************************')
quote = 'Life is like riding a bicycle. To keep your balance you must keep moving.'
print('***************************************************')

print('string length')
print(len(quote))
print('***************************************************')

print('to upper case')
print(quote.upper())
print('***************************************************')

print('to lower case')
print(quote.lower())
print('***************************************************')

print('to title case')
print(quote.title())
print('***************************************************')
print('convert to string')
print(str(42))
print('***************************************************')
print('capitalize')
print('hello'.capitalize())
print('***************************************************')
print('string formatting and placeholders')
# subject_template.format(%s,%s)

subject_template = 'thanks for learning {} with us {}'

print(subject_template.format('Python', 'Ben'))

basket_list = 'you bought a {} and a {}'

print(basket_list.format('Biscuits', 'Lamp'))

print('***************************************************')
# in statement to search for substring matches
print('fuck' in 'utter fuckhead')
print('fuck' in 'utter cunt')

has_beef = 'beef' in 'real beefy m8'

print(has_beef)
# coercing bools

print(bool(1))
print(bool(0))
# full strings are truthy
print(bool('burrito'))
# empty strings are falsy
print(bool(''))

print(not True)
print(not False)
print(True and False)
print(True and True)
print(True or False)
print(True or True)
print(False or False)
print((False and True)or(False or True))


is_smoker = True
has_kids = False

print(has_kids and is_smoker)
print('***************************************************')
# if and conditionals

fruit = 'apples'
print(fruit == 'apples')
print(fruit == 'pear')

if first_name == 'Ben':
    print(first_name + ' is learning Python')
elif first_name == 'Max':
    print(first_name)
else:
    print('you should totally learn python {}'.format(first_name))
print('have a great day {}'.format(first_name))
print('***************************************************')


# age = input(int('how old are you'))
age = 3
if age >= 3:
    print('you are older than three')
else:
    print('you are 3 or younger')

if 3 < 5:
    print('3<5')

if 3 > 5:
    print('3<5')
else:
    print('3 is not greater than 5')
