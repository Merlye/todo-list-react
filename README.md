
DESCRIPTION DU PROJET

Todo List faites en ReactJS avec l'utilisation de functional components.

ACTIONS A EFFCTUEES AU PREALABLE

1. Installer NodeJS

2. Lancer la commande "npm install" pour installer toutes les dépendances du projet

3. Lancer la commande "npm start" pour afficher la page web


DESCRIPTIONS DES COMPOSANTS REACT DU PROJET

-> Le composant "Todo" :
    - création dut tableau "todos" qui va contenir les différentes tâches (chaque élément du tableau est composé d'un 'id' et d'un 'label')
    - gère l'affichage du champ de texte <input> d'ajout de tâche ainsi que le bouton <button> permettant d'ajouter une tâche dans la liste
    - contient les fonctions essentielles de la Todo List à savoir :
        · ajoutTache
        · modificationTache
        · suppressionTache
    - gère l'appel vers le composant fils "Liste"

-> Le composant "Liste" :
    - gère l'affichage des différentes tâches contenu dans le tableau "todos" à travers l'élément html <table>,
        chaque tâche est contenu dans une balise html <tr> avec :   
        · le label de la tâche
        · un bouton pour modifier la tâche
        · un bouton pour supprimer la tâche
        · un appel vers le composant fils "Modal"

-> Le composant "Modal" :
    - gère l'affichage d'une fenêtre modale qui par défaut n'est pas affichée et qui apparait lors d'un clique sur le bouton de modification de tâche
    - la fenêtre contient :
        · un titre
        · un champ de texte permettant d'écrire le nouveau label de la tâche à modifier
        · un bouton pour annuler la modification -> ferme la fenêtre sans prendre en compte la modification
        · un bouton pour valider la modification -> ferme la fenêtre en prenant en compte la modification


INFORMATIONS SUPPLEMENTAIRES
Tous les design de cette page web est écrit dans le fichier css "todo-list.css" dans "/public/css/"
