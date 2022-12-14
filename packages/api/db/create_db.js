import { loadData } from './index.js';

loadData()
  .then( () => {
    // eslint-disable-next-line no-undef
    console.log('All migrated');
  });