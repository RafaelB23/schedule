/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
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
export declare type HorarioCreateFormInputValues = {
    schedule?: string;
};
export declare type HorarioCreateFormValidationValues = {
    schedule?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HorarioCreateFormOverridesProps = {
    HorarioCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    schedule?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type HorarioCreateFormProps = React.PropsWithChildren<{
    overrides?: HorarioCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HorarioCreateFormInputValues) => HorarioCreateFormInputValues;
    onSuccess?: (fields: HorarioCreateFormInputValues) => void;
    onError?: (fields: HorarioCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HorarioCreateFormInputValues) => HorarioCreateFormInputValues;
    onValidate?: HorarioCreateFormValidationValues;
} & React.CSSProperties>;
export default function HorarioCreateForm(props: HorarioCreateFormProps): React.ReactElement;
