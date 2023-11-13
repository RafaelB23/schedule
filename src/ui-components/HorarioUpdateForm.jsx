/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getHorario } from "../graphql/queries";
import { updateHorario } from "../graphql/mutations";
export default function HorarioUpdateForm(props) {
  const {
    id: idProp,
    horario: horarioModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    schedule: "",
    id_maestro: "",
    id_materia: "",
  };
  const [schedule, setSchedule] = React.useState(initialValues.schedule);
  const [id_maestro, setId_maestro] = React.useState(initialValues.id_maestro);
  const [id_materia, setId_materia] = React.useState(initialValues.id_materia);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = horarioRecord
      ? { ...initialValues, ...horarioRecord }
      : initialValues;
    setSchedule(
      typeof cleanValues.schedule === "string" || cleanValues.schedule === null
        ? cleanValues.schedule
        : JSON.stringify(cleanValues.schedule)
    );
    setId_maestro(cleanValues.id_maestro);
    setId_materia(cleanValues.id_materia);
    setErrors({});
  };
  const [horarioRecord, setHorarioRecord] = React.useState(horarioModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getHorario.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getHorario
        : horarioModelProp;
      setHorarioRecord(record);
    };
    queryData();
  }, [idProp, horarioModelProp]);
  React.useEffect(resetStateValues, [horarioRecord]);
  const validations = {
    schedule: [{ type: "Required" }, { type: "JSON" }],
    id_maestro: [{ type: "Required" }],
    id_materia: [{ type: "Required" }],
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
          schedule,
          id_maestro,
          id_materia,
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
            query: updateHorario.replaceAll("__typename", ""),
            variables: {
              input: {
                id: horarioRecord.id,
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
      {...getOverrideProps(overrides, "HorarioUpdateForm")}
      {...rest}
    >
      <TextAreaField
        label="Schedule"
        isRequired={true}
        isReadOnly={false}
        value={schedule}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              schedule: value,
              id_maestro,
              id_materia,
            };
            const result = onChange(modelFields);
            value = result?.schedule ?? value;
          }
          if (errors.schedule?.hasError) {
            runValidationTasks("schedule", value);
          }
          setSchedule(value);
        }}
        onBlur={() => runValidationTasks("schedule", schedule)}
        errorMessage={errors.schedule?.errorMessage}
        hasError={errors.schedule?.hasError}
        {...getOverrideProps(overrides, "schedule")}
      ></TextAreaField>
      <TextField
        label="Id maestro"
        isRequired={true}
        isReadOnly={false}
        value={id_maestro}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              schedule,
              id_maestro: value,
              id_materia,
            };
            const result = onChange(modelFields);
            value = result?.id_maestro ?? value;
          }
          if (errors.id_maestro?.hasError) {
            runValidationTasks("id_maestro", value);
          }
          setId_maestro(value);
        }}
        onBlur={() => runValidationTasks("id_maestro", id_maestro)}
        errorMessage={errors.id_maestro?.errorMessage}
        hasError={errors.id_maestro?.hasError}
        {...getOverrideProps(overrides, "id_maestro")}
      ></TextField>
      <TextField
        label="Id materia"
        isRequired={true}
        isReadOnly={false}
        value={id_materia}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              schedule,
              id_maestro,
              id_materia: value,
            };
            const result = onChange(modelFields);
            value = result?.id_materia ?? value;
          }
          if (errors.id_materia?.hasError) {
            runValidationTasks("id_materia", value);
          }
          setId_materia(value);
        }}
        onBlur={() => runValidationTasks("id_materia", id_materia)}
        errorMessage={errors.id_materia?.errorMessage}
        hasError={errors.id_materia?.hasError}
        {...getOverrideProps(overrides, "id_materia")}
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
          isDisabled={!(idProp || horarioModelProp)}
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
              !(idProp || horarioModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
