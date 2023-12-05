import horarioApi from './horarioApi'
import maestroApi from './maestroApi'
import materiaApi from './materiaApi'
import materiaMaestroApi from './materiaMaestroApi'

export function fmaestroApi(id, key, name, middle_name, last_name, email) {
    return maestroApi(id, key, name, middle_name, last_name, email)
}

export function fmateriaApi(key, name, lenguaje, modality) {
    return materiaApi(key, name, lenguaje, modality)
}

export function fmateriaMaestroApi(fMateriaId, fMaestroId) {
    return materiaMaestroApi(fMateriaId, fMaestroId)
}

export function fhorarioApi(schedule, materiaMaestroId) {
    return horarioApi(schedule, materiaMaestroId)
}