'use strict';
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

alert( 'your score is '+ score );

