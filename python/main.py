nom = input("entrer un nom ")
age = input('entrer votre age ')



try:
    ageProchan = int(age)+1 
except: 
    print('ERREUR: Vous devez rentrez un chiffre pour l\'age')
else: 
     print('Vous vous appellez '+ nom+ ' et vous avez ' +age+' ans ')
     print('l\'an prochain vous aurez '+str(ageProchan)+" ans")