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
export declare type MaestroUpdateFormInputValues = {
    name?: string;
    lastName?: string;
    level?: string;
    lenguage?: string;
    maestro_key?: string;
};
export declare type MaestroUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    level?: ValidationFunction<string>;
    lenguage?: ValidationFunction<string>;
    maestro_key?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MaestroUpdateFormOverridesProps = {
    MaestroUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    level?: PrimitiveOverrideProps<TextFieldProps>;
    lenguage?: PrimitiveOverrideProps<TextFieldProps>;
    maestro_key?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MaestroUpdateFormProps = React.PropsWithChildren<{
    overrides?: MaestroUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    maestro?: any;
    onSubmit?: (fields: MaestroUpdateFormInputValues) => MaestroUpdateFormInputValues;
    onSuccess?: (fields: MaestroUpdateFormInputValues) => void;
    onError?: (fields: MaestroUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MaestroUpdateFormInputValues) => MaestroUpdateFormInputValues;
    onValidate?: MaestroUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MaestroUpdateForm(props: MaestroUpdateFormProps): React.ReactElement;
