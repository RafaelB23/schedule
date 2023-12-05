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
export declare type HorarioUpdateFormInputValues = {
    schedule?: string;
};
export declare type HorarioUpdateFormValidationValues = {
    schedule?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HorarioUpdateFormOverridesProps = {
    HorarioUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    schedule?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type HorarioUpdateFormProps = React.PropsWithChildren<{
    overrides?: HorarioUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    horario?: any;
    onSubmit?: (fields: HorarioUpdateFormInputValues) => HorarioUpdateFormInputValues;
    onSuccess?: (fields: HorarioUpdateFormInputValues) => void;
    onError?: (fields: HorarioUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HorarioUpdateFormInputValues) => HorarioUpdateFormInputValues;
    onValidate?: HorarioUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HorarioUpdateForm(props: HorarioUpdateFormProps): React.ReactElement;
