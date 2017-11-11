function theBeatlesPlay(musicians, instruments) {
  var newArray = [];

  for (let i = 0; l = musicians.length; i < l; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }

  return newArray;
}

function johnLennonFacts(facts) {
  l = facts.length;
  var newArray = [];

  while (l < 0) {
    newArray.push(fact[l] + "!!!");
    l--;
  }
  return newArray;
}

function iLoveTheBeatles(number) {
  var resutls = [];
  var string = "I love the Beatles!";

  do {
    resutls.push(string);
    number++;
  } while(number < 15);

  return resutls;
}
