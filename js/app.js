'use strict';

// create randome number
function random ( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) + min ); //The maximum is inclusive and the minimum is inclusive
}

let userName;
//creat wecome function
function userWelcome (){
  userName = prompt( 'What is your name?' );
  alert( 'Welcome ' + userName );
}

userWelcome ();

let score = 0;
// create answer city function
function answerCity (){
  let answerCity;
  do{
    answerCity = prompt( 'Am I from Irbid?', 'yes or no' ).toLowerCase();
    if ( answerCity === 'yes' || answerCity === 'y' ) {
      alert( 'This is right' );
      score++;
    } else if ( answerCity === 'no' || answerCity === 'n' ) {
      alert( 'No, not really' );
    }
  }while( !( answerCity === 'yes' || answerCity === 'y' || answerCity === 'no' || answerCity === 'n' ) );
}

answerCity ();

//create age function
function ageQuestion(){
  let answerAge ;
  do{
    answerAge= prompt( 'Am I 22 years old?' ).toUpperCase();
    if ( answerAge === 'YES' || answerAge === 'Y' ) {
      alert( 'This is right' );
      score++;
    } else if ( answerAge === 'NO' || answerAge === 'N' ) {
      alert( 'No, not really' );
    }
  }while( !( answerAge === 'YES' || answerAge === 'Y' || answerAge === 'NO' || answerAge === 'N' ) );
}
ageQuestion();

//create grade Question function
function gradeQuestion(){
  let answerGrade;
  do{
    answerGrade= prompt( 'Did I graduate with weak grade from university?' ).toLowerCase();
    if ( answerGrade === 'no' || answerGrade === 'n' ) {
      alert( 'This is right' );
      score++;
    } else if ( answerGrade === 'yes' || answerGrade === 'y' ) {
      alert( 'No, not really' );
    }
  }while( !( answerGrade === 'yes' || answerGrade === 'y' || answerGrade === 'no' || answerGrade === 'n' ) );
}

gradeQuestion();

// create cat question function
function catQuestion(){
  let answerCat;
  do{
    answerCat= prompt( 'Have I a cat? ' ).toLowerCase();
    if ( answerCat === 'no' || answerCat === 'n' ) {
      alert( 'This is right' );
      score++;
    } else if ( answerCat === 'yes' || answerCat === 'y' ) {
      alert( 'No, not really' );
    }
  }while( !( answerCat === 'yes' || answerCat === 'y' || answerCat === 'no' || answerCat === 'n' ) );
}

catQuestion();

// create brith question function
function birithQuestion(){
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
}

birithQuestion();

//create film question
let myFilms=['animation','action','science fiction','comedy'];
function filmQuestion(){
  let y=false;
  let questionFilms;
  for ( let j = 0; j < 6; j++ ) {
    questionFilms=prompt( 'What is my favorite movies type?' );
    for ( let i = 0; i < myFilms.length; i++ ) {
      if( questionFilms.toLowerCase() === myFilms[i] ){
        alert( 'This is right' );
        score=score+1;
        y = true;
      }
    }
    if ( y ) {
      break;
    }
    questionFilms=alert( 'incorrect, try again' );
  }

}

filmQuestion();

alert( 'My favorite movies types are '+ myFilms );
alert( userName+', I hope you have fun with guessing game.' );
alert( `your score is ${score} out of 7` );
