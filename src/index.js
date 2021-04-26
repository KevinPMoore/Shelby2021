'use strict';

function initialContent() {
  setTimeout(function () {
    $('p.mainText').append('What type of content do you want to see?');
  }, 3000);
  setTimeout(function () {
    $('.contentContainer').append(
      `<button class='dancing'>Rude Dancing</button> 
      <button class='photo'>Cute Photos</>`);
  }, 5000);
}

function bindDancingClick() {
  $('.contentContainer').on('click', '.dancing', event => {
    console.log('bind dancing click ran');
    $('h1').addClass('hidden');
    $('.mainText').empty();
    $('.contentContainer').html(
      `<div class='imgPlaceholder'></div>
      <p class='dancingDescription'>
        This is some text about dancing
      </p>
      <button class='back'>Go Back</button>`
    );
  });
}

function bindPhotoClick() {
  $('.contentContainer').on('click', '.photo', event => {
    console.log('bind photo click ran');
    $('h1').addClass('hidden');
    $('p').empty();
    $('.contentContainer').html(
      `<div class='imgPlaceholder'></div>
      <p class='photoDescription'>
        This is some text about photos
      </p>
      <button class='back'>Go Back</button>`
    );
  });
}

function bindGoBack() {
  $('.contentContainer').on('click', '.back', event => {
    $('.contentContainer').empty();
    initialContent();
  });
}


function bindAllButtons() {
  console.log('binding all buttons!');
  bindDancingClick();
  bindPhotoClick();
  bindGoBack();
}

function main() {
  initialContent();
  bindAllButtons();
}

$(main);