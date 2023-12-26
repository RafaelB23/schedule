import { API } from 'aws-amplify';
import { createHorario, deleteHorario } from '../graphql/mutations';

export async function createHorarioApi(schedule, materiamateriaMaestroIdId) {
  const newHorario = await API.graphql({
    query: createHorario,
    variables: {
      input: {
        "schedule": schedule,
        "horarioFMateriaMaestroId": materiamateriaMaestroIdId
      }
    }
  });
  return newHorario;
}

export async function deleteHorarioApi(scheduleId){
  const cDeleteHorario = await API.graphql({
    query: deleteHorario,
    variables: {
      input: {
        "id": scheduleId
      }
    }
  })
  return cDeleteHorario.data?.deleteHorario
}
