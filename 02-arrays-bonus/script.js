const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.slice().reverse();    //faccio una copia con slice per non modificare quello originale e uso reverse per invertirlo
console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = teachers.filter((teacher) => teacher.length >= 5);  
console.log(longNames);

/*
  filter crea un nuovo array che contiene gli elementi che soddifano una condizione, non cambia l'array originale
  se il call back ritorna true l'elemento viene incluso nel nuovo array, altrimenti con false viene escluso
  - teacher: è l'elemento corrente dell'array (nome insegnante)
  - teacher.length: calcola la lunghezza dell'elemento corrente
  - teacher.length >= 5: verifica se la lunghezza del elemetno (nome insegnanet) è maggiore o uguale a 5, se vero l'elemento viene incluso nel array longNames

  con l'arrow semplifico lz funzione, dato che filter chiama la funzione con all'interno la condizione 
  senza arrow
    const longNames = teachers.filter(function(teacher) {
      return teacher.length >= 5;
    });
  */

// 3. Rimuovi 'Ed' dall'array teachers
const index = teachers.indexOf('Ed');

if(index !== -1) {    //indefOf ritorna -1 se con torova l'elemento
    teachers.splice(index, 1);    //se con indexOf trova lelemento cercato, toglie quell'elemento (1 -> elemento singolo) all'arrray all'indice index
}

console.log(teachers);