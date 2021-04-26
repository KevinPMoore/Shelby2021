'use strict';

function initialContent() {
  $('h1').toggleClass('hidden');
  setTimeout(function () {
    $('.contentContainer').html('<p class=\'mainText\'>What type of content do you want to see?</p>');
  }, 3000);
  setTimeout(function () {
    $('.contentContainer').append(
      `<p class='mainText'>Choose carefully</p>
      <button class='danceButton'>Cool Dances</button> 
      <button class='photoButton'>Cute Photos</>`);
  }, 6000);
}

function bindDancingClick() {
  $('.contentContainer').on('click', '.danceButton', () => {
    $('h1').addClass('hidden');
    $('.mainText').empty();
    $('.contentContainer').html(
      `<p class='dancing'>
        Forced to perform at a mysterious dance party, the spotlight shines on you!
      </p>
      <p class='dancing2'>
        Will your moves steal the show or will you burn out in the starlight?
      <p class='dancing3'>
        ITS SHOWTIME!
      </p>
      <button class='confirm'>I wanna dance!</button>
      <button class='back'>I'm not sure</button>`
    );
  });
}

function bindPhotoClick() {
  $('.contentContainer').on('click', '.photoButton', () => {
    $('h1').toggleClass('hidden');
    $('.mainText').empty();
    $('.contentContainer').html(
      `<p class='photo'>
        See a whole new world through the lens of your camera!
      </p>
      <p class='photo2'>
        Photograph the flora and fauna of dense jungles and vast deserts.
      </p>
      <p class='photo3'>
        You might even unravel the mysteries of the Illumina phenomenon!
      </p>
      <button class='confirm'>My camera is ready!</button>
      <button class='back'>Go Back</button>`
    );
  });
}

function bindGoBack() {
  $('.contentContainer').on('click', '.back', () => {
    $('.contentContainer').empty();
    initialContent();
  });
}

function bindConfirm() {
  $('.contentContainer').on('click', '.confirm', () => {
    handleConfirmClick($('.contentContainer').find('p').attr('class'));
  });
}

function handleConfirmClick(choice) {
  if (choice === 'dancing') {
    renderDance();
  } else if (choice ==='photo') {
    renderPhoto();
  }
}

//resume here
function renderDance() {
  console.log('renderDance ran');
  $('.contentContainer').html(
    `<div class='persona'>
    
    </div>`
  );
}

//complete to mirror dance
function renderPhoto() {
  console.log('renderPhoto ran');
  $('.contentContainer').html(
    `<div class='pokemon'>
    
    </div>`
  );
}

function bindAllButtons() {
  bindDancingClick();
  bindPhotoClick();
  bindGoBack();
  bindConfirm();
}

function main() {
  confetti();
  initialContent();
  bindAllButtons();
}

$(main);