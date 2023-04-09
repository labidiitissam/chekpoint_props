
import './App.css';
import Cards from './Cards/Cards';

function App() {
  return (
    <div className="App">
    <Cards fullname="walter wite" bio=" Walter Hartwell « Walt » White est le personnage principal de la série Breaking Bad créée par Vince Gilligan. Il est interprété par Bryan Cranston. L'acteur ...
                     Nom original : Walter Hartwell White Famille : Walter White, Jr. (fils); " profession="acteur" img ="https://pbs.twimg.com/media/B6EyetOCIAEx48-.jpg:large"/>
    <Cards fullname="Picasso" bio=" Pablo Ruiz Picasso, né le 25 octobre 1881 à Malaga et mort le 8 avril 1973 à Mougins, est un peintre, dessinateur, sculpteur et graveur espagnol ayant passé l'essentiel de sa vie en France,Date/Lieu de naissance : 25 octobre 1881, Malaga, Espagne
                     Date de décès : 8 avril 1973, Mougins, France." profession="peintre" img ="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pablo_picasso_1.jpg/513px-Pablo_picasso_1.jpg"/>

    <Cards fullname="Marie currie" bio="Marie Skłodowska-Curie, ou simplement Marie Curie, née Maria Salomea Skłodowska le 7 novembre 1867 à Varsovie et morte le 4 juillet 1934 à Passy, dans le sanatorium de Sancellemoz, est une physicienne et chimiste polonaise." profession="physicienne" img ="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Marie_Curie_c1920.jpg/1200px-Marie_Curie_c1920.jpg"/>
    

    </div>
  );
}

export default App;
