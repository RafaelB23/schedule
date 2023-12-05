import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";





type EagerMaestro = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Maestro, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly middle_name?: string | null;
  readonly last_name?: string | null;
  readonly key?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMaestro = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Maestro, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly middle_name?: string | null;
  readonly last_name?: string | null;
  readonly key?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Maestro = LazyLoading extends LazyLoadingDisabled ? EagerMaestro : LazyMaestro

export declare const Maestro: (new (init: ModelInit<Maestro>) => Maestro) & {
  copyOf(source: Maestro, mutator: (draft: MutableModel<Maestro>) => MutableModel<Maestro> | void): Maestro;
}

type EagerHorario = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Horario, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly schedule: string;
  readonly Materia?: Materia | null;
  readonly Maestro?: Maestro | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly horarioMateriaId?: string | null;
  readonly horarioMaestroId?: string | null;
}

type LazyHorario = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Horario, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly schedule: string;
  readonly Materia: AsyncItem<Materia | undefined>;
  readonly Maestro: AsyncItem<Maestro | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly horarioMateriaId?: string | null;
  readonly horarioMaestroId?: string | null;
}

export declare type Horario = LazyLoading extends LazyLoadingDisabled ? EagerHorario : LazyHorario

export declare const Horario: (new (init: ModelInit<Horario>) => Horario) & {
  copyOf(source: Horario, mutator: (draft: MutableModel<Horario>) => MutableModel<Horario> | void): Horario;
}

type EagerMateria = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Materia, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly materia_key?: string | null;
  readonly name?: string | null;
  readonly lenguage?: string | null;
  readonly modality?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMateria = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Materia, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly materia_key?: string | null;
  readonly name?: string | null;
  readonly lenguage?: string | null;
  readonly modality?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Materia = LazyLoading extends LazyLoadingDisabled ? EagerMateria : LazyMateria

export declare const Materia: (new (init: ModelInit<Materia>) => Materia) & {
  copyOf(source: Materia, mutator: (draft: MutableModel<Materia>) => MutableModel<Materia> | void): Materia;
}