import maestroApi from './maestroApi'
import materiaApi from './materiaApi'

export function fmaestroApi(name, lastname, level, lenguage, key){
    return maestroApi(name, lastname, level, lenguage, key)
}

export function fmateriaApi(key, name, lenguaje, modality){
    return materiaApi(key, name, lenguaje, modality)
}