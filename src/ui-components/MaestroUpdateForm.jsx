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
import { getMaestro } from "../graphql/queries";
import { updateMaestro } from "../graphql/mutations";
export default function MaestroUpdateForm(props) {
  const {
    id: idProp,
    maestro: maestroModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    lastName: "",
    level: "",
    lenguage: "",
    maestro_key: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [level, setLevel] = React.useState(initialValues.level);
  const [lenguage, setLenguage] = React.useState(initialValues.lenguage);
  const [maestro_key, setMaestro_key] = React.useState(
    initialValues.maestro_key
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = maestroRecord
      ? { ...initialValues, ...maestroRecord }
      : initialValues;
    setName(cleanValues.name);
    setLastName(cleanValues.lastName);
    setLevel(cleanValues.level);
    setLenguage(cleanValues.lenguage);
    setMaestro_key(cleanValues.maestro_key);
    setErrors({});
  };
  const [maestroRecord, setMaestroRecord] = React.useState(maestroModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getMaestro.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getMaestro
        : maestroModelProp;
      setMaestroRecord(record);
    };
    queryData();
  }, [idProp, maestroModelProp]);
  React.useEffect(resetStateValues, [maestroRecord]);
  const validations = {
    name: [],
    lastName: [],
    level: [],
    lenguage: [],
    maestro_key: [{ type: "Required" }],
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
          name: name ?? null,
          lastName: lastName ?? null,
          level: level ?? null,
          lenguage: lenguage ?? null,
          maestro_key,
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
            query: updateMaestro.replaceAll("__typename", ""),
            variables: {
              input: {
                id: maestroRecord.id,
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
      {...getOverrideProps(overrides, "MaestroUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              lastName,
              level,
              lenguage,
              maestro_key,
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
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              lastName: value,
              level,
              lenguage,
              maestro_key,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <TextField
        label="Level"
        isRequired={false}
        isReadOnly={false}
        value={level}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              lastName,
              level: value,
              lenguage,
              maestro_key,
            };
            const result = onChange(modelFields);
            value = result?.level ?? value;
          }
          if (errors.level?.hasError) {
            runValidationTasks("level", value);
          }
          setLevel(value);
        }}
        onBlur={() => runValidationTasks("level", level)}
        errorMessage={errors.level?.errorMessage}
        hasError={errors.level?.hasError}
        {...getOverrideProps(overrides, "level")}
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
              name,
              lastName,
              level,
              lenguage: value,
              maestro_key,
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
        label="Maestro key"
        isRequired={true}
        isReadOnly={false}
        value={maestro_key}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              lastName,
              level,
              lenguage,
              maestro_key: value,
            };
            const result = onChange(modelFields);
            value = result?.maestro_key ?? value;
          }
          if (errors.maestro_key?.hasError) {
            runValidationTasks("maestro_key", value);
          }
          setMaestro_key(value);
        }}
        onBlur={() => runValidationTasks("maestro_key", maestro_key)}
        errorMessage={errors.maestro_key?.errorMessage}
        hasError={errors.maestro_key?.hasError}
        {...getOverrideProps(overrides, "maestro_key")}
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
          isDisabled={!(idProp || maestroModelProp)}
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
              !(idProp || maestroModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
