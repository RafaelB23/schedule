/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createHorario = /* GraphQL */ `
  mutation CreateHorario(
    $input: CreateHorarioInput!
    $condition: ModelHorarioConditionInput
  ) {
    createHorario(input: $input, condition: $condition) {
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
export const updateHorario = /* GraphQL */ `
  mutation UpdateHorario(
    $input: UpdateHorarioInput!
    $condition: ModelHorarioConditionInput
  ) {
    updateHorario(input: $input, condition: $condition) {
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
export const deleteHorario = /* GraphQL */ `
  mutation DeleteHorario(
    $input: DeleteHorarioInput!
    $condition: ModelHorarioConditionInput
  ) {
    deleteHorario(input: $input, condition: $condition) {
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
export const createMateria = /* GraphQL */ `
  mutation CreateMateria(
    $input: CreateMateriaInput!
    $condition: ModelMateriaConditionInput
  ) {
    createMateria(input: $input, condition: $condition) {
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
export const updateMateria = /* GraphQL */ `
  mutation UpdateMateria(
    $input: UpdateMateriaInput!
    $condition: ModelMateriaConditionInput
  ) {
    updateMateria(input: $input, condition: $condition) {
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
export const deleteMateria = /* GraphQL */ `
  mutation DeleteMateria(
    $input: DeleteMateriaInput!
    $condition: ModelMateriaConditionInput
  ) {
    deleteMateria(input: $input, condition: $condition) {
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
export const createMaestro = /* GraphQL */ `
  mutation CreateMaestro(
    $input: CreateMaestroInput!
    $condition: ModelMaestroConditionInput
  ) {
    createMaestro(input: $input, condition: $condition) {
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
export const updateMaestro = /* GraphQL */ `
  mutation UpdateMaestro(
    $input: UpdateMaestroInput!
    $condition: ModelMaestroConditionInput
  ) {
    updateMaestro(input: $input, condition: $condition) {
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
export const deleteMaestro = /* GraphQL */ `
  mutation DeleteMaestro(
    $input: DeleteMaestroInput!
    $condition: ModelMaestroConditionInput
  ) {
    deleteMaestro(input: $input, condition: $condition) {
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
