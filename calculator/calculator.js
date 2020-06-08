module.exports = {
  add,
};

function add(a = 0, b = 0) {
  if(isNumber(a) && isNumber(b)) {
    return a + b
  } else {
    throw new Error('Both arguments need to be numbers')
  }
}

function isNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value) // JQuery implementation - checksing if sth is a number - Finite + Parsable 
  // from jquery-1.9.1.js github repo https://github.com/jquery/jquery download and search for isNumeric
}

// start with low hanging fruit --> happy path (your basic assumptions or expectations)
// then check for in invalid input
// then move on to edge cases - numbers in JS have a limit
// then rare edge cases - rarely there
