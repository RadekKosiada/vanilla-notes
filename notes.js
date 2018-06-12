

let textToAdd;
let color;

// initializing variables for background colors for post it;
const pink = 'rgb(252, 168, 212)';
const green ='';
const blue = '';
const yellow = 'rgb(255,255,165)';

let ctrlPink = false;
let ctrlGreen = false;
let ctrlBlue = false;
let ctrlYellow = true;

// introducing date of adding the note as a key for local storage data
let currentDate = new Date;

let inpKey = `${currentDate}`;
let optionsForDate = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };

// function to get the most preferred language in the respective browser (set in the browser's setting) to save and display date in your locale format
// the variable 'lang' will have country code format i.e. either 'en' or 'en-EN' that will determine the format of the date in the same language. 
// The app will be used/notes will be made most probably in the same language as the browser is used. Thus having the date in the local format will improve consistency of notes and UX in generall. 
let lang = '';
function getLang()
{
 if (navigator.languages != undefined) 
 lang = (navigator.languages[0]).toString(); 
 else 
 lang = (navigator.languages).toString();
}
getLang();

console.log(lang);

let dateToDisplay = currentDate.toLocaleDateString(lang, optionsForDate);
console.log(dateToDisplay);

let addNote = function() {
   //  textToAdd will equal the input typed in the input textarea
   textToAdd = $('#input').val();
   
   
  // initiating variable that will save the date and the text added, so both can be saved in the locale storage and display later, everytime the app is loaded.
   let toBeSaved = `${dateToDisplay}<br><br>${textToAdd}`;

  //  $('#output').append(`
  //    <div class='memo'>      
  //      <p class='note'>${toBeSaved}</p>
  //      <button class='delBtn'>Delete</button>     
  //   </div>`); 

  $('#output').html('<h1>Adding your note...</h1>'); 
  $('#output').css('text-align', 'center');
   $('#input').val('');      
   localStorage.setItem(inpKey, toBeSaved);   
   window.location.reload(); 
}

  $('#input').keypress(function() {
    if(event.which == 13)  addNote();   
  });

  $('#sub-button').click(addNote);
  

$( window ).on( "load", function() {

  for (let i=0; i < localStorage.length; i++) {
// here the key that is saved to the localStorage and has a key of 'new Date' will be assigned to variable 'key';
    const key = localStorage.key(i);   
   
    $('#output').append(
      `<div class='memo' id='memo${i}'>       
        <p class='note'>${localStorage.getItem(key)}</p>        
        <button 
        class='delBtn' 
        id='delBtn${i}'        
        >Delete</button>     
      </div>`
    );    
    $('#input').val('');  

     // triggerring alert popup before deleting a note
    $(`#delBtn${i}`).on('click', function(){
      $('#cover').fadeIn('slow');      
      $('#alertMsg').fadeIn('slow');
      
      // deleting a note when clicked yes
        $('#yesBtn').on('click', function() {
          localStorage.removeItem(key, localStorage.getItem(localStorage.key(i)));
          window.location.reload(); 
        });
      // hiding pop up when clicked no
        $('#noBtn').on('click', function() {
          $('#cover').fadeOut('slow');
          $('#alertMsg').fadeOut('slow');
          window.location.reload();
        });
    });


  };
});

// Additional info displayed when hover on 'learn more'
  $('#tooltip').mouseenter( function() {
    $('#tooltiptext').fadeIn();
    $('#tooltiptext').fadeIn('slow');

});

$('#tooltip').mouseleave( function() {
  $('#tooltiptext').fadeOut();  
  $('#tooltiptext').fadeOut('slow');
 
});

// Deleting all notes at once
$('#delAll').on('click', function () {  
  // showing 'are you sure?' popup
  $('#cover').fadeIn('slow');      
  $('#alertMsg2').fadeIn('slow');
  
  // deleting all notes when clicked yes
    $('#yesBtn2').on('click', function() {
      localStorage.clear();
      window.location.reload(); 
    });
  // hiding alert pop up when clicked no
    $('#noBtn2').on('click', function() {
      $('#cover').fadeOut('slow');
      $('#alertMsg2').fadeOut('slow');
    });
});


// opacity: 0;
// transition: opacity 0.3s;
// background-color: grey;
// color: white;

// 24.05
// adding timestamp DONE
// 25.05
// adding delete button DONE
// adding attributes to elements DONE
// change cursor when hovers DONE
// jako KEY mozna uzyc daty! DONE
// dodac obsluge przez klawisze DONE
// koniecznie znalezc sposob na kasowanie lepszy DONE
// adding delete option DONE
// 26.05
// are you sure alert? DONE &FIXED
// add info on the beginning, when hover? DONE
// working on confirm field
// having white cover when info text faded in doesnt work

// 04.06
// working on the yes-no alert popup & cover DONE
// dopasowywanie sie do wielkosci notki? DONE
// trim time to make it look better, change date format DONE
// adapting font-size of the note when hover DONE
// detecting the most preferred browsers language DONE
// adapting date format to the browser's language/country DONE
// adapting the alert button! (size, position and cover) DONE
// size of the cover DONE
// more info in the middle DONE
// font ladny i z internationalnymi znakami DONE
// this weird effect when start typing in the text area DONE
// when fixed the more info, change the background color? DONE

// 05.06
// two different fonts for instruction and notes DONE
// text wrapping DONE
// square notes DONE
// transform/scale when hover on the note DONE
// Adjusting the size of the element when the text 'too long'. DONE by using % or width and height  
// working on the placement of the Del button DONE by setting width and height of the memo with %, so delete button went down
// and adjusting the margin-top of the Delete button when different lenght of the text DONE
// box shadow effect, so it looks like sticked post it DONE
// header font size adapted DONE
// notes side by side, DONE thanks to float: left DONE

// 06.06
// find different colours for post it DONE
// changing colors for pink, green, blue and yellow DONE
// adjusting other colors in the app 

// do it all with a little example. build a new app and change the colors
// check drag and drop

// 12.06
// minor fixes
// clear all Button localStorage.clear(); DONE





