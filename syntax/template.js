var name = 'speaker';
var letter = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,\
 '+name+' sed do eiusmod tempor incididunt ut' +name+'labore et dolore \
 magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco \
 laboris nisi ut aliquip ex ea commodo \n \n consequat. Duis aute irure dolor in \
 reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
console.log(letter);
//중복을 없애는 코드가 좋은 코드이다.

//template literal 문법 `` ${}사용한``

var letter = `Dear ${name}
Lorem ipsum dolor sit amet, consectetur adipisicing elit, ${name}
 sed do eiusmod tempor incididunt ut ${name} labore et dolore ${name}magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco ${name}
 laboris nisi ut aliquip ex ea commodo consequat. ${1+1} Duis aute irure dolor in ${name}
 reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ${name}
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia ${name}
 deserunt mollit anim id est laborum. ${name}`
console.log(letter);
