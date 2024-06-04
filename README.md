# React + Vite

but : faire une app react avec un header, et une grille de films/séries

# Install et lancement local

doc de vite : https://vitejs.dev/guide/
je vous conseille d'installer l'extension vs code 'Simple React Snippets' aussi c'est un banger 

sinon la version condensée =>

Commande pour init un projet vite :
```
npm create vite@latest
```

on définit le nom du projet (nom du dossier)
le nom du package on s'en fiche (jsp à quoi ça sert), on fait 'entrée'
on choisit React, puis JavaScript (import ItemGrid from "./ItemGrid";
Trigger warning TypeScript)

la config est fait on tape les commandes écrites dans le terminal :
```
cd <nom du projet>
npm i
npm run dev
```

l'app est lancée en local

on peut supprimer les dossiers /assets, /public et tout ce qu'il y a dans le return du composant App (App.jsx)

important à savoir aussi : tout le code sera dans le dossier /src. donc je dirais : "créer un dossier /trucMuche" par exemple ça sera dans le dossier /src, sinon je préciserai

# Découpage des tâches

Je préfère commencer par faire le json, même un petit, pour avoir directement la bonne structure dans mon code ensuite

Ensuite, je pense l'organisation de mes composants :
Je réfléchis page par page.
ici il n'y aura qu'une page a priori (dans un premier temps en tout cas).
=> sur ma page principale j'ai quoi ? -> je décris mes composants. un composant ~ une feature.
Une fois que j'ai une idée globale des composants que je vais créer, c'est l'heure de bouffer du keyboard.

# Etape 1 - Le JSON

on créé un dossier /assets dans lequel on créé un json. je vais définir la structure comme ceci :

```
[
    {titre : bla,
    type: blou},

    {titre : bla,
    type: blou},

    {titre : bla,
    type: blou},
]
```

# Etape 2 - L'archi des composants

on peut commencer par créer un dossier components. c'est là qu'on créera nos composants

du coup la réponse à la question : j'ai quoi sur ma page principale c'est : un header et une grille 
ça fait pour l'instant 2 composants à créer 

ensuite on zoom dans nos composants : 
    le header, pas réellement besoin d'autre chose. on va faire simple mais on pourrait faire un composant pour chaque bouton par exemple.
    la grille, il va falloir créer un modèle pour l'affichage type d'un élément (ici films/séries). ça fait un composant de plus

du coup, on peut déja créer 3 composants : (les noms sont pas forcément top)
Header.jsx
Grid.jsx
ItemGrid.jsx

# Etape 3 - Le premier composant
on va faire le header et l'afficher 

une convention en react est de définir les composants en mode old fashion avec "function" et les fonctions internes aux composants avec "const LeNom = () =>{}"
vous pouvez faire comme ça si ça vous va. 

pour le header on va pas faire grand chose, simplement du html et pas très fonctionnel en plus de ça. 

à la fin mon composant ressemble à ça :
```
function Header () {

    return(
        <div className="header" >
            <ul>
                <li>Home</li>
                <li>Donnne la moula</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}
export default Header
```

basiquement, je return juste une liste dont les labels sont en brut dans mon code

Attention : ne pas oublier la dernière ligne. sans ça on ne pourra pas utiliser le composant dans d'autres fichiers

pour l'affichage on va dans le App.jsx, on import notre composant:
```
import Header from "./components/Header";
```

et on le met dans le return du App.jsx :
```
function App() {
    return (
        <>
            <Header />
        </>
    );
}
```

pour l'instant c'est moche et ça ressemble pas à un header car pas de CSS. je vous laisse vous amuser avec ça ;) 

# Etape 4.0 - La grille et ce qui va avec 
je préfère commencer par les composants les plus 'simples'. ici Grid va dépendre de ItemGrid donc c'est ce dernier qui  va être le plus simple.

C'est ici qu'on va voir la notion de props : une props c'est tout simplement le parametre d'un composant. ce qu'il faut savoir c'est que c'est un objet 
Y a 2 écoles, 2 types d'écritures dont une que je préfère grandement à l'autre :

Numero uno :
```
function ItemGrid(props) {
    // on doit faire props.title pour accéder à la valeur title de la props  
}
```

Numero dos :
```
function ItemGrid({title, type}) {
    // ici on a juste besoin de faire title pour avoir sa valeur
}
```

Spoiler je suis team numero dos. Je trouve ça plus clair et comme ça on sait ce que l'on a comme parametres surtout ({title, type} c'est plus parlant que props quoi)

du coup à la fin on a :
```
function ItemGrid({ title, type }) {
    return (
        <div className="itemGrid">
            <h1 className="title">{title}</h1>
            <h4 className="type">{type}</h4>
        </div>
    );
}
```

# Etape 4.5 - La grille pour de vrai cette fois

maintenant qu'on a géré l'affichage des items, on gère l'affichage de la grille 

ici on va avoir besoin du json et de notre précédent composant, faut donc les importer
```
import data from "../assets/data.json";
import ItemGrid from "./ItemGrid";
```
le chemin peut changer donc faut faire attention 

et là idem : return => div => on map data (data est une liste, on l'a construite comme ça) et le retour de notre map sera un composant ItemGrid avec comme parametres (props) title et type

```
function Grid() {
    return (
        <div className="grid">
            {data.map((item, index) => (
                <ItemGrid key={index} title={item.title} type={item.type} />;
            ))}
        </div>
    );
}
```

le key={index} c'est juste un truc que React demande quand on map une liste, une sorte d'id. 

GROS DISCLAMER : pour une raison que j'ignore mais c'est comme ça pas le choix, on doit mettre des parenthèses et pas des accolades pour encadrer le retour du callback du map. je vous le dis car je viens de passer 10min à remettre mes compétences en question car rien ne s'affichait, mais au final tout va bien je suis toujours un crack (téma les chevilles)


# Etape 5 - On mélange et pouf ! Magie
si on a tout bien import et export, il suffit de rajouter le composant Grid dans le App et tout devrait s'afficher 

C'est bien moche et assez vide mais pas de jugement, css est là de toute façon