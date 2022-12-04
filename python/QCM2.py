def enterNumber(max,min=1):
    try:
        number = int(input(f'saisir nombre entre {min} et {max}: '))
        if min <= number <= max:
            return number
        print(f'saisir nombre entre {min} et {max}: ')
    except: 
        print()
        print("Veuillez saisir un nombre")
    return enterNumber(max,min=1)

def askQuestion(titre):
    options = titre[1]
    answer = titre[2]
    
    check = False
    print(f"Question: {titre[0]}: ")
    for i in range(len(options)):
        print(f'{i+1}_{options[i]}')
    
    userAnswer = enterNumber(len(options))
    if answer == options[userAnswer-1].lower():
        print("Felicitations bonne reponse")
        check = True
    else:
        print("Mauvaise réponse") 
    check 
    
def runQcm(QCM):
    score = 0
    for x in range(len(QCM)):
        if askQuestion(QCM[x]) == True:
            score+=1
    print("Score: "+str(score))


QCM = (  
    ("La capitale de France?", ('Marseille','Nice','Venise','Paris'),"paris"),
    ("La capitale de Bresil?", ('Bogota','Brasillia','Buenos Aeres', 'BridgeTown'),"brasillia"),
    ("La capitale de Italie?", ('Rome','Nice','Venise', 'Paris'),"rome"),
    ("La capitale de Cuba?", ('Santo-Domingo','Caracas','Havanna','Castries'),"havanna"),
    ("La capitale de Russie?", ('Moscou','Berlin','Venise', 'Berne'),"moscou") 
) 

runQcm(QCM)
print(f"Score final: {score}")
    