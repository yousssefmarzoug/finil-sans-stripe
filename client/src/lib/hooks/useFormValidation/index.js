import React, { useMemo, useEffect, useCallback } from "react";

const FormContext = React.createContext();

let context;

export const useFormValidation = ({ formName, defaultValues = {} }) => {
  const [formValues, setFormValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isDirty, setDirty] = React.useState(false);

  const handleOnChange = useCallback((event, value) => {
    setDirty(true);
    const val = value?.toLowerCase() ?? event.target.value;
    setFormValues((prevState) => ({
      ...prevState,
      [formName]: { ...prevState[formName], [event.target.name]: val },
    }));
  }, [formName]);

  const isValid = useMemo(
    () => Object.values(errors[formName] ?? {}).some((error) => error),
    [errors, formName]
  );

  const register = useCallback((values) => {
    const val = values ?? defaultValues;
    Object.entries(val).forEach(([key, value]) => {
      setFormValues((prevState) => ({
        ...defaultValues,
        [formName]: { ...prevState[formName], [key]: value },
      }));
    });
  }, [defaultValues, formName]);

  useEffect(() => {
    register();
  }, [register]);

  const validate = useCallback(async (values) =>
    Object.entries(values).forEach(([key, value]) =>
      setErrors((prevState) => ({
        ...prevState,
        [formName]: { ...prevState[formName], [key]: !value?.length },
      }))
    ), [formName]);

  context = useMemo(() => {
    return {
      errors,
      register,
      validate,
      handleOnChange,
      formValues,
      isValid: Boolean(!isValid && isDirty),
    };
  }, [errors, formValues, handleOnChange, isValid, isDirty, register,validate]);

  return context;
};

const FormProvider = ({ children }) => (
  <FormContext.Provider value={context}>{children}</FormContext.Provider>
);

export default FormProvider;
