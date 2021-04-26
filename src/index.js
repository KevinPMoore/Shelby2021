'use strict';

function initialContent() {
  $('h1').toggleClass('hidden');
  setTimeout(function () {
    $('p.mainText').append('What type of content do you want to see?');
  }, 3000);
  setTimeout(function () {
    $('.contentContainer').append(
      `<button class='dance'>Cool Dances</button> 
      <button class='photo'>Cute Photos</>`);
  }, 6000);
}

function bindDancingClick() {
  $('.contentContainer').on('click', '.dance', () => {
    $('h1').addClass('hidden');
    $('.mainText').empty();
    $('.contentContainer').html(
      `<div class='imgPlaceholder'></div>
      <p class='dancingDescription'>
        Forced to perform at a mysterious dance party, the spotlight shines on you! </br>
        Will your moves steal the show or will you burn out in the starlight? </br>
        ITS SHOWTIME!
      </p>
      <button class='confirm'>I wanna dance!</button>
      <button class='back'>I'm not sure</button>`
    );
  });
}

function bindPhotoClick() {
  $('.contentContainer').on('click', '.photo', () => {
    $('h1').toggleClass('hidden');
    $('.mainText').empty();
    $('.contentContainer').html(
      `<div class='imgPlaceholder'></div>
      <p class='photoDescription'>
        See a whole new world through the lens of your camera! </br>
        Photograph the flora and fauna of dense jungles and vast deserts. </br>
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
  if (choice === 'dancingDescription') {
    renderDance();
  } else if (choice ==='photoDescription') {
    renderPhoto();
  }
}

function renderDance() {
  console.log('renderDance ran');
}

function renderPhoto() {
  console.log('renderPhoto ran');

}

function bindAllButtons() {
  bindDancingClick();
  bindPhotoClick();
  bindGoBack();
  bindConfirm();
}

function main() {
  initialContent();
  bindAllButtons();
}

$(main);