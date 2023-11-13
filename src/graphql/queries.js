/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHorario = /* GraphQL */ `
  query GetHorario($id: ID!) {
    getHorario(id: $id) {
      id
      schedule
      id_maestro
      id_materia
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listHorarios = /* GraphQL */ `
  query ListHorarios(
    $filter: ModelHorarioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHorarios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        schedule
        id_maestro
        id_materia
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMateria = /* GraphQL */ `
  query GetMateria($id: ID!) {
    getMateria(id: $id) {
      id
      materia_key
      name
      lenguage
      modality
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMaterias = /* GraphQL */ `
  query ListMaterias(
    $filter: ModelMateriaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMaterias(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        materia_key
        name
        lenguage
        modality
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMaestro = /* GraphQL */ `
  query GetMaestro($id: ID!) {
    getMaestro(id: $id) {
      id
      name
      lastName
      level
      lenguage
      maestro_key
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMaestros = /* GraphQL */ `
  query ListMaestros(
    $filter: ModelMaestroFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMaestros(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        lastName
        level
        lenguage
        maestro_key
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
