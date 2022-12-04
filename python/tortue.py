"""def escalier(taille, nb):
    for i in range(0,nb):
        y.forward(taille)
        y.left(90)
        y.forward(taille)
        y.right(90)
        y.forward(taille)
        taille = taille-4
    
escalier(40, 10)""" 

"""
def crucifix(taille, nb):
    for i in range(0,nb):
        y.forward(taille)
        y.left(90)
        y.backward(taille)
        y.right(90) 
        y.backward(taille)
        y.right(90)
        
crucifix(100, 4)""" 

"""
def square(taille):
    for i in range(0,4):
        y.forward(taille)
        y.right(90)

def squares(beginPath,nb):
    for i in range(0, nb):
        feet = (i+1)*beginPath
        square(feet)
squares(100, 4)"""


import turtle
y = turtle.Turtle()
y.speed(1)
def crucifix(taille, nb):
    for i in range(0,nb):
        y.forward(taille)
        y.left(90)
        y.backward(taille)
        y.right(90) 
        y.backward(taille)
        y.right(90)
        
crucifix(100, 4)
turtle.done()