'use strict';

function random ( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) + min ); //The maximum is inclusive and the minimum is inclusive
}

let userName = prompt( 'What is your name?' );
alert( 'Welcome ' + userName );

let score = 0;

let ansCity = prompt( 'Am I from Irbid?', 'yes or no' ).toLowerCase();
if ( ansCity === 'yes' || ansCity === 'y' ) {
  alert( 'This is right' );
  score++;
} else if ( ansCity === 'no' || ansCity === 'n' ) {
  alert( 'No, not really' );
}

let answork = prompt( 'Am I working ?', 'yes or no' ).toLowerCase();
if ( answork === 'no' || answork === 'n' ) {
  alert( 'This is right' );
  score++;
} else if ( answork === 'yes' || answork === 'y' ) {
  alert( 'No, not really' );
}

let ansAge = prompt( 'Am I 22 years old?' ).toUpperCase();
if ( ansAge === 'YES' || ansAge === 'Y' ) {
  alert( 'This is right' );
  score++;
} else if ( ansAge === 'NO' || ansAge === 'N' ) {
  alert( 'No, not really' );
}

let ansGrade = prompt( 'Did I graduate with weak grade from university?' ).toLowerCase();
if ( ansGrade === 'no' || ansGrade === 'n' ) {
  alert( 'This is right' );
  score++;
} else if ( ansGrade === 'yes' || ansGrade === 'y' ) {
  alert( 'No, not really' );
}

let ansCat = prompt( 'Have I a cat? ' ).toLowerCase();
if ( ansCat === 'no' || ansCat === 'n' ) {
  alert( 'This is right' );
  score++;
} else if ( ansCat === 'yes' || ansCat === 'y' ) {
  alert( 'No, not really' );
}

let myBirth= random( 1,12 );
let ansBirth;
for ( let i = 0; i < 4; i++ ) {
  ansBirth=prompt( 'What is my birthday month?','enter a number' );
  if ( myBirth===parseInt( ansBirth ) ) {
    alert( 'This is right' );
    score=score+1;
    break;
  } else if ( myBirth < parseInt( ansBirth ) ){
    alert( 'too high' );
  } else if ( myBirth > parseInt( ansBirth ) ) {
    alert( 'too low' );
  }
  if ( i===3 && ( myBirth!==parseInt( ansBirth ) ) ) {
    alert( `Incorrect, the right answer is ${myBirth}` );
  }
}

let y=false;
let myFilms=['animation','action','science fiction','comedy'];
let ansFilms;
for ( let j = 0; j < 6; j++ ) {
  ansFilms=prompt( 'What is my favorite movies type?' );
  for ( let i = 0; i < myFilms.length; i++ ) {
    if( ansFilms.toLowerCase() === myFilms[i] ){
      alert( 'This is right' );
      score=score+1;
      y = true;
    }
  }
  if ( y ) {
    break;
  }
  ansFilms=alert( 'incorrect, try again' );
}

alert( 'My favorite movies types are '+myFilms );
alert( userName+', I hope you have fun with guessing game.' );
alert( `your score is ${score} out of 7` );
