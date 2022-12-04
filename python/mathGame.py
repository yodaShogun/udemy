import random 

NBMIN = 1
NBMAX = 10
QUESTIONSNUMBER = 4

def askQuestion():
        nb1 = random.randint(NBMIN, NBMAX)
        nb2 = random.randint(NBMIN, NBMAX)
        randomOperator = random.randint(0,2)
        if randomOperator == 0:
            operator ='*'
        elif randomOperator == 1:
           operator ='/' 
        else:
            operator = '+'
        resultat = int(input(f'Calcuclez {nb1} {operator} {nb2}: '))
        if randomOperator == 0:
            calcul = nb1*nb2
        elif randomOperator == 1:
           calcul = nb1/nb2
        else:
            calcul = nb1+nb2
        if resultat == calcul:
            return True
        return False
    
POINTSNUMBER = 0  
    
for i in range(0,QUESTIONSNUMBER): 
    print("question n°"+str(i+1)+" sur 4")       
    if askQuestion():
        print('Correct answer')
        POINTSNUMBER += 1
    else:
        print('Wrong answer')
    print() 
    
print(f"Vous avez: {POINTSNUMBER} / {QUESTIONSNUMBER} ") 

moyenne = int(QUESTIONSNUMBER/2)
if POINTSNUMBER == QUESTIONSNUMBER:
    print('Execellent')
elif POINTSNUMBER == 0:
    print('Revisez vos maths')
elif POINTSNUMBER > moyenne: 
    print('pas mal')
else: 
    print('Peut faire mieux') 
    