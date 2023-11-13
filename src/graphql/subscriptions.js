/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateHorario = /* GraphQL */ `
  subscription OnCreateHorario($filter: ModelSubscriptionHorarioFilterInput) {
    onCreateHorario(filter: $filter) {
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
export const onUpdateHorario = /* GraphQL */ `
  subscription OnUpdateHorario($filter: ModelSubscriptionHorarioFilterInput) {
    onUpdateHorario(filter: $filter) {
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
export const onDeleteHorario = /* GraphQL */ `
  subscription OnDeleteHorario($filter: ModelSubscriptionHorarioFilterInput) {
    onDeleteHorario(filter: $filter) {
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
export const onCreateMateria = /* GraphQL */ `
  subscription OnCreateMateria($filter: ModelSubscriptionMateriaFilterInput) {
    onCreateMateria(filter: $filter) {
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
export const onUpdateMateria = /* GraphQL */ `
  subscription OnUpdateMateria($filter: ModelSubscriptionMateriaFilterInput) {
    onUpdateMateria(filter: $filter) {
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
export const onDeleteMateria = /* GraphQL */ `
  subscription OnDeleteMateria($filter: ModelSubscriptionMateriaFilterInput) {
    onDeleteMateria(filter: $filter) {
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
export const onCreateMaestro = /* GraphQL */ `
  subscription OnCreateMaestro($filter: ModelSubscriptionMaestroFilterInput) {
    onCreateMaestro(filter: $filter) {
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
export const onUpdateMaestro = /* GraphQL */ `
  subscription OnUpdateMaestro($filter: ModelSubscriptionMaestroFilterInput) {
    onUpdateMaestro(filter: $filter) {
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
export const onDeleteMaestro = /* GraphQL */ `
  subscription OnDeleteMaestro($filter: ModelSubscriptionMaestroFilterInput) {
    onDeleteMaestro(filter: $filter) {
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
