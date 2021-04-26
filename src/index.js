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
    $('.contentContainer').empty();
    setTimeout(function () {
      $('.contentContainer').html('<p class=\'dancing\'>Forced to perform at a mysterious dance party, the spotlight shines on you!</p>');
    }, 1000);
    setTimeout(function() {
      $('.contentContainer').append('<p class=\'dancing\'>Will your moves steal their hearts or will you burn out in the starlight?</p>');
    }, 4000);
    setTimeout(function() {
      $('.contentContainer').append('<p class=\'dancing\'>Its showtime!</p>');
    }, 7000);
    setTimeout(function() {
      $('.contentContainer').append(
        `<button class='confirm'>I wanna dance!</button>
        <button class='back'>I'm not sure</button>`);
    }, 9000);
  });
}

function bindPhotoClick() {
  $('.contentContainer').on('click', '.photoButton', () => {
    $('h1').addClass('hidden');
    $('.contentContainer').empty();
    setTimeout(function () {
      $('.contentContainer').html('<p class=\'photo\'>See a whole new world through the lens of your camera!</p>');
    }, 1000);
    setTimeout(function() {
      $('.contentContainer').append('<p class=\'photo\'>Snapshot the flora and fauna of dense jungles and vast deserts.</p>');
    }, 4000);
    setTimeout(function() {
      $('.contentContainer').append('<p class=\'photo\'>Unravel the mysteries of the Illumina phenomenon.</p>');
    }, 7000);
    setTimeout(function() {
      $('.contentContainer').append(
        `<button class='confirm'>My camera is ready!</button>
        <button class='back'>I'm not sure</button>`);
    }, 9000);
  });
}

function bindGoBack() {
  $('.contentContainer').on('click', '.back', () => {
    $('h1').toggleClass('hidden');
    $('.contentContainer').html(
      `<p class='mainText'>What type of content do you want to see?</p>
      <p class='mainText'>Choose carefully</p>
      <button class='danceButton'>Cool Dances</button> 
      <button class='photoButton'>Cute Photos</>`
    );
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