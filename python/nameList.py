# listNom = []
# while True:
#     nom = input("Entrer nom: ")
#     if nom == "":
#         break
#     listNom.append(nom) 

# print(listNom) 

#``````````````````````````````Less Values``````````````````````````````````````
driver_distance_km = [1.5,2.2,0.4,0.9,7.1,1.1,0.6]
minDistance = min(driver_distance_km)
MaxDistance = max(driver_distance_km)

availableDistance = 0

for distance in driver_distance_km:
    if minDistance < distance <= MaxDistance:
        availableDistance = distance

print(availableDistance)
        
    