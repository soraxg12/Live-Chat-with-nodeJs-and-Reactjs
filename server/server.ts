import {http} from './app'

const server = http.listen(3333, function() {
    console.log("listening on *:3333");
  });