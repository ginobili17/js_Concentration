'use strict';

{

  var tramp = 13;
  var cards = [];
  
  var flipCount = 0;
  var firstCard = null;
  var secondCard = null;
  
  //初期化処理 カードを生成
  function init() {
    var card;
    var spade = '♠️';
    var heart = '❤︎';
    var diamond = '♦️';
    var club = '♣️';
    for (var i = 1; i <= tramp; i++) {
      cards.push(createSpade(spade, i));
      cards.push(createHeart(heart, i));
      cards.push(createDiamond(diamond, i));
      cards.push(createClub(club, i));
      // document.getElementById('stage').appendChild(createCard(i));
      // document.getElementById('stage').appendChild(createCard(i));
    }
    while (cards.length) {
      card = cards.splice(Math.floor(Math.random() * cards.length), 1)[0];
      document.getElementById('stage').appendChild(card);
    }
  }

  //♠️カードのhtmlを追加
  function createSpade(spade, num) {
    var container;
    var card;
    var inner;

    inner = '<div class="card-front">' + spade + num + '</div><div class="card-back">?</div>'

    card = document.createElement('div');
    card.innerHTML = inner;
    card.className = 'card';

    // カードがクリックされた時
    card.addEventListener('click', function() {
      flipCard(this);
    });

    container = document.createElement('div');
    container.className = 'card-container';
    container.appendChild(card);

    return container;

  }

  //❤︎カードのhtmlを追加
  function createHeart(heart, num) {
    var container;
    var card;
    var inner;

    inner = '<div class="card-front">' + heart + num + '</div><div class="card-back">?</div>'

    card = document.createElement('div');
    card.innerHTML = inner;
    card.className = 'card';

    // カードがクリックされた時
    card.addEventListener('click', function() {
      flipCard(this);
    });

    container = document.createElement('div');
    container.className = 'card-container';
    container.appendChild(card);

    return container;

  }

  //♦︎カードのhtmlを追加
  function createDiamond(diamond, num) {
    var container;
    var card;
    var inner;

    inner = '<div class="card-front">' + diamond + num + '</div><div class="card-back">?</div>'

    card = document.createElement('div');
    card.innerHTML = inner;
    card.className = 'card';

    // カードがクリックされた時
    card.addEventListener('click', function() {
      flipCard(this);
    });

    container = document.createElement('div');
    container.className = 'card-container';
    container.appendChild(card);

    return container;

  }

  //♣️カードのhtmlを追加
  function createClub(diamond, num) {
    var container;
    var card;
    var inner;

    inner = '<div class="card-front">' + diamond + num + '</div><div class="card-back">?</div>'

    card = document.createElement('div');
    card.innerHTML = inner;
    card.className = 'card';

    // カードがクリックされた時
    card.addEventListener('click', function() {
      flipCard(this);
    });

    container = document.createElement('div');
    container.className = 'card-container';
    container.appendChild(card);

    return container;

  }

  // カードがクリックされた時
  function flipCard(card) {

    // ２枚ともクリックされた時
    if (firstCard !== null && secondCard !== null) {
      return;
    }

    if (card.className.indexOf('open') !== -1) {
      return;
    }

    card.className = 'card open';
    flipCount++;

    // １枚目、２枚のカードを代入
    if (flipCount % 2 === 1) {
      firstCard = card;
    } else {
      secondCard = card;
      secondCard.addEventListener('transitionend', check);
    }
  }

  function check() {
    // カードの数字が一致するかの条件式
    if (firstCard.children[0].textContent.replace(/[^0-9]/g, '') !== secondCard.children[0].textContent.replace(/[^0-9]/g, '')) {
        firstCard.className = 'card';
        secondCard.className = 'card';
      } else {
        firstCard.style.display = 'none'; 
        secondCard.style.display = 'none';
      }
      secondCard.removeEventListener('transitionend', check); 
      firstCard = null;
      secondCard = null;
  }

  init();
}