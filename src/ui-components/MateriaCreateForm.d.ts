/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MateriaCreateFormInputValues = {
    materia_key?: string;
    name?: string;
    lenguage?: string;
    modality?: string;
};
export declare type MateriaCreateFormValidationValues = {
    materia_key?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    lenguage?: ValidationFunction<string>;
    modality?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MateriaCreateFormOverridesProps = {
    MateriaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    materia_key?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    lenguage?: PrimitiveOverrideProps<TextFieldProps>;
    modality?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MateriaCreateFormProps = React.PropsWithChildren<{
    overrides?: MateriaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MateriaCreateFormInputValues) => MateriaCreateFormInputValues;
    onSuccess?: (fields: MateriaCreateFormInputValues) => void;
    onError?: (fields: MateriaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MateriaCreateFormInputValues) => MateriaCreateFormInputValues;
    onValidate?: MateriaCreateFormValidationValues;
} & React.CSSProperties>;
export default function MateriaCreateForm(props: MateriaCreateFormProps): React.ReactElement;
