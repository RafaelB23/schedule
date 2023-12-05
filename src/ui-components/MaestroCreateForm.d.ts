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
    middle_name?: string;
    last_name?: string;
    key?: string;
    email?: string;
};
export declare type MaestroCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    middle_name?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
    key?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MaestroCreateFormOverridesProps = {
    MaestroCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    middle_name?: PrimitiveOverrideProps<TextFieldProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    key?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
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
