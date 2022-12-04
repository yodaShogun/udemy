def showPizza(pizzaCollection, opt=0):
    print(f"````````````````````````Liste des pizzas({len(pizzaCollection)})`````````````````````````````````````")
    
    if len(pizzaCollection) == 0:
        print("This an empty collection")
        return
    for i in pizzaCollection:
        print(i)
    
    if opt==0:
        print(pizzaCollection[0])
        print(pizzaCollection[len(pizzaCollection)-1]) 
    else:
        print(pizzaCollection[:opt])
    
def addingPizza(pizzaColection):
    pizzaColection.append(input("Ajouter une pizza: "))
    print(pizzaColection)
    

pizzaStock = ['4 fromages', 'vegetarienne', 'hawaii', 'normande']

showPizza(pizzaStock,3)
addingPizza(pizzaStock)
