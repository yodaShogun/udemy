import random 

MIN_NUMBER = 5
MAX_NUMBER = 60
SECRETNUMBER = random.randint(MIN_NUMBER, MAX_NUMBER)
vie = 4
number = 0

def askNumber(nbMin, nbMax):
    nombre_int = 0
    while nombre_int == 0:
        nombre_str = input(f'quel est le nombre magique entre {nbMin} et {nbMax}? ')
        try:
            nombre_int = int(nombre_str)
        except:
            print('Vous devez rentrer un nombre!!!')
        else:
            if nombre_int<nbMin or nombre_int>nbMax:
                print(f"ERROR:the number must be between {nbMin} and {nbMax}. Try again")
                nombre_int = 0
                
    return nombre_int

while not number == SECRETNUMBER and vie > 0:
    print("Il vous reste %s pts de vie" %(vie))
    number = askNumber(MIN_NUMBER, MAX_NUMBER) 
    if number == SECRETNUMBER:
        print('Bravo Vous avez gagné')
    elif number > SECRETNUMBER:
        print('Le nombre est plus petit')
        vie -= 1
    else:
        print('Le nombre est plus grand')
        vie -= 1 

if vie == 0: 
    print(f'le nombre etait: {SECRETNUMBER}')
    print('Vous avez perdu')