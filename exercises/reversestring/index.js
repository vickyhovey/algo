// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// first soln using reverse() function

// function reverse(str) {
//     return str.split('').reverse().join('');
// }


// second soln using for loop
function reverse(str) {
    let reversed = '';
    for (character of str) {
        reversed = character + reversed;
        debugger;
    }
    return reversed;
}
reverse('asdf');
// third soln using reduce helper
// function reverse(str) {
//     // debugger; // pause the execution
//     return str.split('').reduce((rev, char) => char + rev, '');
// }
// reverse('asdf');

module.exports = reverse;
