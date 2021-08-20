import { createConnection } from 'typeorm';

createConnection()
  .then(() => console.log('connected w database'))
  .catch(e => console.log(`[ERROR FROM LOGS] - ${e}`));
