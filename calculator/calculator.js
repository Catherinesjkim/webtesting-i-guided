module.exports = {
  add,
};

// pure function
function add(a = 0, b = 0) {
  return a + b
}

// start with low hanging fruit --> happy path (your basic assumptions or expectations)
// then check for in invalid input
// then move on to edge cases - numbers in JS have a limit
// then rare edge cases - rarely there
