/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMateriaMaestro = /* GraphQL */ `
  query GetMateriaMaestro($id: ID!) {
    getMateriaMaestro(id: $id) {
      id
      fMateria {
        id
        materia_key
        name
        lenguage
        modality
        createdAt
        updatedAt
        owner
        __typename
      }
      fMaestro {
        id
        name
        middle_name
        last_name
        key
        email
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      materiaMaestroFMateriaId
      materiaMaestroFMaestroId
      owner
      __typename
    }
  }
`;
export const listMateriaMaestros = /* GraphQL */ `
  query ListMateriaMaestros(
    $filter: ModelMateriaMaestroFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMateriaMaestros(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        materiaMaestroFMateriaId
        materiaMaestroFMaestroId
        owner
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
      middle_name
      last_name
      key
      email
      createdAt
      updatedAt
      owner
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
        middle_name
        last_name
        key
        email
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getHorario = /* GraphQL */ `
  query GetHorario($id: ID!) {
    getHorario(id: $id) {
      id
      schedule
      fMateriaMaestro {
        id
        createdAt
        updatedAt
        materiaMaestroFMateriaId
        materiaMaestroFMaestroId
        owner
        __typename
      }
      createdAt
      updatedAt
      horarioFMateriaMaestroId
      owner
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
        createdAt
        updatedAt
        horarioFMateriaMaestroId
        owner
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
      owner
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
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
