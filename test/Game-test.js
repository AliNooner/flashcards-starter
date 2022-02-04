const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Game = require('../src/Game');


describe('Game', function() {
  //create new variables for cards, deck, round, game
  let card1, card2, card3;
  let cards;
  let deck;
  let round;
  let game;

    beforeEach(function() {
      card1 = new Card(1, 'What is a group of hedgehogs called?', ['Gaggle', 'Parade', 'Pickle'], 'Pickle');
      card2 = new Card(2, 'Where in it\s body is a shrimp\s heart located?', ['Head', 'Chest', 'Legs'], 'Head');
      card3 = new Card(3, 'Which animal never sleeps?', ['Bullfrog', 'Hummingbird', 'Shark'], 'Bullfrog');

      cards = [card1, card2, card3];

      game = new Game(round);
      deck = new Deck(cards);
      round = new Round(deck);
    });

    it('should be a function', function() {
      //expect game to be a function
      expect(Game).to.be.a('function');
    });

    it('should be an instance of a Game', function() {
      //expect new game to be an instance of a game
      expect(game).to.be.an.instanceOf(Game);
    });
    //it should start the game with start function
    it('should be able to start the game', function() {
      //expect game to start when method is called
      expect(game.start).to.be.a('function');
    });
    //it should create a deck of cards and round to be played
    it('should create a deck of cards and a round to be played', function() {
      //start game
      game.start();
      //create an instance of deck
      expect(deck).to.be.an.instanceOf(Deck);
      //create an instance of round
      expect(game.currentRound).to.be.an.instanceOf(Round);
    });
});
