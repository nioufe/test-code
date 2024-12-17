console.log('une fois ici, la géolocalisation est évidente');
console.log(`%c const message = 'ķºªÙ³èÅÝODk1LCAtNzMuOTg5MzA4';
const key = 'NEED';
let result = '';
for(let i=0; i<message.length; i++){
  console.log(message[i], key[i])
  result += key[i] ? String.fromCharCode((message[i].charCodeAt(0) - key[i].charCodeAt(0))) : message[i];
  console.log(result)
}`, 'color: rgba(255, 0, 0, 0)');