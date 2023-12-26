/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMateriaMaestro = /* GraphQL */ `
  subscription OnCreateMateriaMaestro(
    $filter: ModelSubscriptionMateriaMaestroFilterInput
    $owner: String
  ) {
    onCreateMateriaMaestro(filter: $filter, owner: $owner) {
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
export const onUpdateMateriaMaestro = /* GraphQL */ `
  subscription OnUpdateMateriaMaestro(
    $filter: ModelSubscriptionMateriaMaestroFilterInput
    $owner: String
  ) {
    onUpdateMateriaMaestro(filter: $filter, owner: $owner) {
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
export const onDeleteMateriaMaestro = /* GraphQL */ `
  subscription OnDeleteMateriaMaestro(
    $filter: ModelSubscriptionMateriaMaestroFilterInput
    $owner: String
  ) {
    onDeleteMateriaMaestro(filter: $filter, owner: $owner) {
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
export const onCreateMaestro = /* GraphQL */ `
  subscription OnCreateMaestro(
    $filter: ModelSubscriptionMaestroFilterInput
    $owner: String
  ) {
    onCreateMaestro(filter: $filter, owner: $owner) {
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
export const onUpdateMaestro = /* GraphQL */ `
  subscription OnUpdateMaestro(
    $filter: ModelSubscriptionMaestroFilterInput
    $owner: String
  ) {
    onUpdateMaestro(filter: $filter, owner: $owner) {
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
export const onDeleteMaestro = /* GraphQL */ `
  subscription OnDeleteMaestro(
    $filter: ModelSubscriptionMaestroFilterInput
    $owner: String
  ) {
    onDeleteMaestro(filter: $filter, owner: $owner) {
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
export const onCreateHorario = /* GraphQL */ `
  subscription OnCreateHorario(
    $filter: ModelSubscriptionHorarioFilterInput
    $owner: String
  ) {
    onCreateHorario(filter: $filter, owner: $owner) {
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
export const onUpdateHorario = /* GraphQL */ `
  subscription OnUpdateHorario(
    $filter: ModelSubscriptionHorarioFilterInput
    $owner: String
  ) {
    onUpdateHorario(filter: $filter, owner: $owner) {
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
export const onDeleteHorario = /* GraphQL */ `
  subscription OnDeleteHorario(
    $filter: ModelSubscriptionHorarioFilterInput
    $owner: String
  ) {
    onDeleteHorario(filter: $filter, owner: $owner) {
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
export const onCreateMateria = /* GraphQL */ `
  subscription OnCreateMateria(
    $filter: ModelSubscriptionMateriaFilterInput
    $owner: String
  ) {
    onCreateMateria(filter: $filter, owner: $owner) {
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
export const onUpdateMateria = /* GraphQL */ `
  subscription OnUpdateMateria(
    $filter: ModelSubscriptionMateriaFilterInput
    $owner: String
  ) {
    onUpdateMateria(filter: $filter, owner: $owner) {
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
export const onDeleteMateria = /* GraphQL */ `
  subscription OnDeleteMateria(
    $filter: ModelSubscriptionMateriaFilterInput
    $owner: String
  ) {
    onDeleteMateria(filter: $filter, owner: $owner) {
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
