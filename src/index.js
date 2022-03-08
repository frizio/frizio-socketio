import hostname from "./app";
import { PORT } from './config'

const main = () => {
  console.log('hostname: ' + hostname);
  console.log(PORT);
};

main();