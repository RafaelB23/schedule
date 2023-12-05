/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
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
export declare type MateriaMaestroUpdateFormInputValues = {};
export declare type MateriaMaestroUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MateriaMaestroUpdateFormOverridesProps = {
    MateriaMaestroUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type MateriaMaestroUpdateFormProps = React.PropsWithChildren<{
    overrides?: MateriaMaestroUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    materiaMaestro?: any;
    onSubmit?: (fields: MateriaMaestroUpdateFormInputValues) => MateriaMaestroUpdateFormInputValues;
    onSuccess?: (fields: MateriaMaestroUpdateFormInputValues) => void;
    onError?: (fields: MateriaMaestroUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MateriaMaestroUpdateFormInputValues) => MateriaMaestroUpdateFormInputValues;
    onValidate?: MateriaMaestroUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MateriaMaestroUpdateForm(props: MateriaMaestroUpdateFormProps): React.ReactElement;
