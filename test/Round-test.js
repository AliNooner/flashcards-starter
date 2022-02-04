const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');




describe('Round', function() {

  let card1, card2, card3;
  let cards;
  let deck;
  let round;

  beforeEach(function() {

    card1 = new Card (1, 'What is a group of hedgehogs called?', ['Gaggle', 'Parade', 'Pickle'], 'Pickle');
    card2 = new Card (2, 'Where in it\s body is a shrimp\s heart located?', ['Head', 'Chest', 'Legs'], 'Head');
    card3 = new Card (3, 'Which animal never sleeps?', ['Bullfrog', 'Hummingbird', 'Shark'], 'Bullfrog');

    cards = [card1, card2, card3];

    deck = new Deck(cards);
    round = new Round(deck);
  });

  it('should be a function', function() {

    expect(Round).to.be.a('function');
  });

  it('should be an instance of a Round', function() {

    expect(round).to.be.an.instanceOf(Round);
  });

  it('should return the first card in the deck when new round starts', function() {

    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  it('should increase the turn count each time the user plays a turn', function() {

    expect(round.turns).to.equal(0);

    round.takeTurn();

    expect(round.turns).to.equal(1);
  });

  it('should return the current card being played', function() {

    round.takeTurn();

    expect(round.currentCard).to.equal(deck.cards[0]);

    round.takeTurn();

    expect(round.currentCard).to.equal(deck.cards[1]);
  });

  it('should determine if a guess is correct or incorrect', function() {

    expect(round.takeTurn('Pickle')).to.equal('Correct! Great job!');

    expect(round.takeTurn('Parade')).to.equal('Ope! Incorrect!');
  });

  it('should add incorrect guesses to a new array', function() {

    round.takeTurn('Parade');

    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it('should calculate the number of correct answers by percentage', function() {

    round.takeTurn('Pickle');

    expect(round.calculatePercentCorrect()).to.equal(100);
  });

  it('should end the round and display message with percentage of correct answers', function() {
    round.takeTurn('Gaggle');
    round.takeTurn('Pickle');

    expect(round.endRound()).to.equal('** Round over! ** You answered 50% of the questions correctly!');
  });
});
