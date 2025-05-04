// src/lib/utils/formValidation.js

export function hasEmptyField(form, fieldsExcluded = []) {
    let binaryAnd = 1;
    for (let key in form) {
        if (fieldsExcluded.includes(key)) continue;
        binaryAnd &= isDirtyField(form[key]);
        if (!binaryAnd) break;
    }
    return !binaryAnd;
}

export function hasArrayEmptyField(array) {
    let binaryAnd = 1;
    for (let item of array) {
        binaryAnd &= !hasEmptyField(item);
        if (!binaryAnd) break;
    }
    return !binaryAnd;
}

export function isValidEmail(email) {
    if (!email) return false;
    const re =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

export function isDirtyField(field) {
    return field !== null && field !== undefined && String(field).trim().length > 0;
}

const messagesDefault = {
    required: "Campo requerido",
    email: "Debe ser un correo válido",
    minLength: (value) => `Mínimo ${value} caracteres`,
    maxLength: (value) => `Máximo ${value} caracteres`,
    sameAs: "Campo no coincide",
    minValue: (value) => `Valor mínimo ${value}`,
    maxValue: (value) => `Valor máximo ${value}`,
};

export function hasFieldError(field, validators = []) {
    for (let validator of validators) {
        let key = typeof validator === "object" ? Object.keys(validator)[0] : validator;
        let value = typeof validator === "object" ? validator[key] : null;
        let message = messagesDefault[key];

        let isValid = true;
        switch (key) {
            case "required":
                isValid = isDirtyField(field);
                break;
            case "email":
                isValid = isValidEmail(field);
                break;
            case "minLength":
                isValid = field.length >= value;
                message = messagesDefault[key](value);
                break;
            case "maxLength":
                isValid = field.length <= value;
                message = messagesDefault[key](value);
                break;
            case "sameAs":
                isValid = field == value;
                break;
            case "minValue":
                isValid = Number(field) >= value;
                message = messagesDefault[key](value);
                break;
            case "maxValue":
                isValid = Number(field) <= value;
                message = messagesDefault[key](value);
                break;
        }
        if (!isValid) return message;
    }
    return null;
}

export function hasFieldsErrors(fields, validators) {
    return Object.keys(fields).reduce((result, fieldName) => {
        result[fieldName] = hasFieldError(fields[fieldName], validators[fieldName]);
        return result;
    }, {});
}

export function isObjNotEmpty(obj = {}) {
    return Object.values(obj).some(isDirtyField);
}

export function hasArrayOfFieldsErrors(arrayfields, validators) {
    return arrayfields.map((fields) => hasFieldsErrors(fields, validators));
}

export function isArrayOfObjNotEmpty(arrayObj) {
    return arrayObj.some(isObjNotEmpty);
}
