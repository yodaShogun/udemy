nom = input('Votre nom: ')
ageProchain = 0 

while ageProchain == 0 :
    age = input('Quel est votre age: ')
    try:
        ageProchain = int(age)+1
    except:
          print('ERREUR: Vous devez rentrez un chiffre pour l\'age')
    else:  
     print('Vous vous appellez '+ nom+ ' et vous avez ' +age+' ans ')
     print('l\'an prochain vous aurez '+str(ageProchain)+" ans")
          

"""while n<10:
    print(n)
    n=n+1""" 
    
#password=''

"""
while password != "TOTO":
    password = input('Entrez mot de passe ') 
""" 
"""
try:
    ageProchan = int(age)+1 
except: 
    print('ERREUR: Vous devez rentrez un chiffre pour l\'age')
else: 
     print('Vous vous appellez '+ nom+ ' et vous avez ' +age+' ans ')
     print('l\'an prochain vous aurez '+str(ageProchan)+" ans")
     """