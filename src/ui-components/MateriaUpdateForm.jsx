/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getMateria } from "../graphql/queries";
import { updateMateria } from "../graphql/mutations";
export default function MateriaUpdateForm(props) {
  const {
    id: idProp,
    materia: materiaModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    materia_key: "",
    name: "",
    lenguage: "",
    modality: "",
  };
  const [materia_key, setMateria_key] = React.useState(
    initialValues.materia_key
  );
  const [name, setName] = React.useState(initialValues.name);
  const [lenguage, setLenguage] = React.useState(initialValues.lenguage);
  const [modality, setModality] = React.useState(initialValues.modality);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = materiaRecord
      ? { ...initialValues, ...materiaRecord }
      : initialValues;
    setMateria_key(cleanValues.materia_key);
    setName(cleanValues.name);
    setLenguage(cleanValues.lenguage);
    setModality(cleanValues.modality);
    setErrors({});
  };
  const [materiaRecord, setMateriaRecord] = React.useState(materiaModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getMateria.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getMateria
        : materiaModelProp;
      setMateriaRecord(record);
    };
    queryData();
  }, [idProp, materiaModelProp]);
  React.useEffect(resetStateValues, [materiaRecord]);
  const validations = {
    materia_key: [],
    name: [],
    lenguage: [],
    modality: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          materia_key: materia_key ?? null,
          name: name ?? null,
          lenguage: lenguage ?? null,
          modality: modality ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updateMateria.replaceAll("__typename", ""),
            variables: {
              input: {
                id: materiaRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "MateriaUpdateForm")}
      {...rest}
    >
      <TextField
        label="Materia key"
        isRequired={false}
        isReadOnly={false}
        value={materia_key}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              materia_key: value,
              name,
              lenguage,
              modality,
            };
            const result = onChange(modelFields);
            value = result?.materia_key ?? value;
          }
          if (errors.materia_key?.hasError) {
            runValidationTasks("materia_key", value);
          }
          setMateria_key(value);
        }}
        onBlur={() => runValidationTasks("materia_key", materia_key)}
        errorMessage={errors.materia_key?.errorMessage}
        hasError={errors.materia_key?.hasError}
        {...getOverrideProps(overrides, "materia_key")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              materia_key,
              name: value,
              lenguage,
              modality,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Lenguage"
        isRequired={false}
        isReadOnly={false}
        value={lenguage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              materia_key,
              name,
              lenguage: value,
              modality,
            };
            const result = onChange(modelFields);
            value = result?.lenguage ?? value;
          }
          if (errors.lenguage?.hasError) {
            runValidationTasks("lenguage", value);
          }
          setLenguage(value);
        }}
        onBlur={() => runValidationTasks("lenguage", lenguage)}
        errorMessage={errors.lenguage?.errorMessage}
        hasError={errors.lenguage?.hasError}
        {...getOverrideProps(overrides, "lenguage")}
      ></TextField>
      <TextField
        label="Modality"
        isRequired={false}
        isReadOnly={false}
        value={modality}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              materia_key,
              name,
              lenguage,
              modality: value,
            };
            const result = onChange(modelFields);
            value = result?.modality ?? value;
          }
          if (errors.modality?.hasError) {
            runValidationTasks("modality", value);
          }
          setModality(value);
        }}
        onBlur={() => runValidationTasks("modality", modality)}
        errorMessage={errors.modality?.errorMessage}
        hasError={errors.modality?.hasError}
        {...getOverrideProps(overrides, "modality")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || materiaModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || materiaModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
