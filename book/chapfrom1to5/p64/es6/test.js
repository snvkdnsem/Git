'use strict';

function say({subject, verb, object}) {
  console.log(`${subject} ${verb} ${object}`);
}

const sentences = [
  {subject:'I', verb:'love', object:'you' },
  {subject:'you', verb:'love', object:'me' },
];

for (let s of sentences) {
  say(s);
}
