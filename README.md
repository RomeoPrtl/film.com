# film.com

Les fonctionnalités de film.com : 
    - Liste les films les mieux notés selon l'api de The Movie Database.
    - Permet une recherche dynamique d'un film en tapant dans une barre de recherche. 

Le programme : 

    Configuration initiale :
        Importation de la configuration (config.js) qui contient l'API_KEY nécessaire pour l'autorisation.
        Sélection des éléments du DOM (Document Object Model) nécessaires pour l'interaction avec la page web, comme la liste ul, le champ de saisie inputNumeroPage, le bouton btnRecherchez et le champ de recherche research.

    Définition des options de requête :
        Un objet options est défini avec la méthode GET et des headers contenant le type d'acceptation (json) et l'autorisation avec la clé d'API.

    Fonctionnalité de recherche instantanée :
        Un gestionnaire d'événements est ajouté à l'élément research. Lorsque l'utilisateur saisit du texte, l'événement déclenche une fonction qui filtre les résultats déjà obtenus (resulats) basé sur la saisie de l'utilisateur (convertis en minuscules) et met à jour l'affichage avec afficherRecherche.

    Affichage des résultats de recherche :
        La fonction afficherRecherche est utilisée pour mettre à jour la liste ul sur la page web. Elle crée un nouvel élément li pour chaque film dans les résultats de la recherche, y ajoute un paragraphe avec le titre du film et une image avec le poster du film.

    Fonctionnalité du bouton de recherche :
        Un gestionnaire d'événements est ajouté au bouton btnRecherchez. Lorsqu'il est cliqué, il empêche l'action par défaut du formulaire, extrait le numéro de page du champ de saisie inputNumeroPage, et effectue une requête fetch à l'API de TMDb avec le numéro de page spécifié.
        La réponse est traitée pour transformer le JSON en objet, et le contenu de ul est vidé pour préparer l'affichage des nouveaux résultats.
        Chaque film reçu dans la réponse est ajouté à la liste ul avec son titre et son poster, similairement à la fonction afficherRecherche.

    Gestion des erreurs :
        Si la requête fetch échoue pour une raison quelconque, l'erreur est capturée et affichée dans la console avec console.error.

Comment installer le projet ?
    - Cliquez sur le bouton Code et copiez https://github.com/RomeoPrtl/film.com.git.
    - Ouvrez un terminal sur votre ordinateur.
    - Tapez git clone, puis collez l'URL que vous avez copiée. (git clone https://github.com/RomeoPrtl/film.com.git) 
    - Appuyez sur Entrée, et le dépôt sera cloné dans le répertoire où vous avez ouvert le terminal.
    - Pour que le projet fonctionne, il vous faudra la clé de API TMDb : 
        - Création d'un compte TMDb (The Movie Database).
        - Demandez la clé API.
        - Remplacez API_KEY dans le fichier script.js par votre clé personnelle. 

    

