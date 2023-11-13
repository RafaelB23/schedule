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
export declare type MaestroCreateFormInputValues = {
    name?: string;
    lastName?: string;
    level?: string;
    lenguage?: string;
    maestro_key?: string;
};
export declare type MaestroCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    level?: ValidationFunction<string>;
    lenguage?: ValidationFunction<string>;
    maestro_key?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MaestroCreateFormOverridesProps = {
    MaestroCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    level?: PrimitiveOverrideProps<TextFieldProps>;
    lenguage?: PrimitiveOverrideProps<TextFieldProps>;
    maestro_key?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MaestroCreateFormProps = React.PropsWithChildren<{
    overrides?: MaestroCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MaestroCreateFormInputValues) => MaestroCreateFormInputValues;
    onSuccess?: (fields: MaestroCreateFormInputValues) => void;
    onError?: (fields: MaestroCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MaestroCreateFormInputValues) => MaestroCreateFormInputValues;
    onValidate?: MaestroCreateFormValidationValues;
} & React.CSSProperties>;
export default function MaestroCreateForm(props: MaestroCreateFormProps): React.ReactElement;
