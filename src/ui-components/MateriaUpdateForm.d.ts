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
export declare type MateriaUpdateFormInputValues = {
    materia_key?: string;
    name?: string;
    lenguage?: string;
    modality?: string;
};
export declare type MateriaUpdateFormValidationValues = {
    materia_key?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    lenguage?: ValidationFunction<string>;
    modality?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MateriaUpdateFormOverridesProps = {
    MateriaUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    materia_key?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    lenguage?: PrimitiveOverrideProps<TextFieldProps>;
    modality?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MateriaUpdateFormProps = React.PropsWithChildren<{
    overrides?: MateriaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    materia?: any;
    onSubmit?: (fields: MateriaUpdateFormInputValues) => MateriaUpdateFormInputValues;
    onSuccess?: (fields: MateriaUpdateFormInputValues) => void;
    onError?: (fields: MateriaUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MateriaUpdateFormInputValues) => MateriaUpdateFormInputValues;
    onValidate?: MateriaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MateriaUpdateForm(props: MateriaUpdateFormProps): React.ReactElement;
