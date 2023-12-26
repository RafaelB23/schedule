import { createHorarioApi, deleteHorarioApi } from './horarioApi'
import maestroApi from './maestroApi'
import {createMateriaApi, deleteMateriaApi} from './materiaApi'
import { createMateriaMaestroApi, deleteMateriaMaestroApi } from './materiaMaestroApi'

export function fmaestroApi(id, key, name, middle_name, last_name, email) {
    return maestroApi(id, key, name, middle_name, last_name, email)
}

export function fcreateMateriaApi(key, name, lenguaje, modality) {
    return createMateriaApi(key, name, lenguaje, modality)
}
export function fdeleteMateriaApi(materiaId){
    return deleteMateriaApi(materiaId)
}


export function fcreateHorarioApi(schedule, materiaMaestroId) {
    return createHorarioApi(schedule, materiaMaestroId)
}

export function fdeleteHorarioApi(scheduleId){
    return deleteHorarioApi(scheduleId)
}

export function fcreateMateriaMaestroApi(fMateriaId, fMaestroId) {
    return createMateriaMaestroApi(fMateriaId, fMaestroId)
}

export function fdeleteMateriaMaestroApi(materiaMaestroId){
    return deleteMateriaMaestroApi(materiaMaestroId)
}