/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMateriaMaestro = /* GraphQL */ `
  mutation CreateMateriaMaestro(
    $input: CreateMateriaMaestroInput!
    $condition: ModelMateriaMaestroConditionInput
  ) {
    createMateriaMaestro(input: $input, condition: $condition) {
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
export const updateMateriaMaestro = /* GraphQL */ `
  mutation UpdateMateriaMaestro(
    $input: UpdateMateriaMaestroInput!
    $condition: ModelMateriaMaestroConditionInput
  ) {
    updateMateriaMaestro(input: $input, condition: $condition) {
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
export const deleteMateriaMaestro = /* GraphQL */ `
  mutation DeleteMateriaMaestro(
    $input: DeleteMateriaMaestroInput!
    $condition: ModelMateriaMaestroConditionInput
  ) {
    deleteMateriaMaestro(input: $input, condition: $condition) {
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
export const createMaestro = /* GraphQL */ `
  mutation CreateMaestro(
    $input: CreateMaestroInput!
    $condition: ModelMaestroConditionInput
  ) {
    createMaestro(input: $input, condition: $condition) {
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
export const updateMaestro = /* GraphQL */ `
  mutation UpdateMaestro(
    $input: UpdateMaestroInput!
    $condition: ModelMaestroConditionInput
  ) {
    updateMaestro(input: $input, condition: $condition) {
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
export const deleteMaestro = /* GraphQL */ `
  mutation DeleteMaestro(
    $input: DeleteMaestroInput!
    $condition: ModelMaestroConditionInput
  ) {
    deleteMaestro(input: $input, condition: $condition) {
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
export const createHorario = /* GraphQL */ `
  mutation CreateHorario(
    $input: CreateHorarioInput!
    $condition: ModelHorarioConditionInput
  ) {
    createHorario(input: $input, condition: $condition) {
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
export const updateHorario = /* GraphQL */ `
  mutation UpdateHorario(
    $input: UpdateHorarioInput!
    $condition: ModelHorarioConditionInput
  ) {
    updateHorario(input: $input, condition: $condition) {
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
export const deleteHorario = /* GraphQL */ `
  mutation DeleteHorario(
    $input: DeleteHorarioInput!
    $condition: ModelHorarioConditionInput
  ) {
    deleteHorario(input: $input, condition: $condition) {
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
      owner
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
      owner
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
      owner
      __typename
    }
  }
`;
