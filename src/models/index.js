// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Maestro, Horario, Materia } = initSchema(schema);

export {
  Maestro,
  Horario,
  Materia
};