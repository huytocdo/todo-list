export const errorText = {
    signup: {
        UNMATCH_RETYPASSWORD: 'Your password and retype-password are not matched',
        EMAIL_EXISTS: 'The email address is already in use by another account.',
        OPERATION_NOT_ALLOWED: 'Password sign-in is disabled for this project.',
        TOO_MANY_ATTEMPTS_TRY_LATER: 'We have blocked all requests from this device due to unusual activity. Try again later.',
    },
    signin: {
        EMAIL_NOT_FOUND: 'There is no user record corresponding to this identifier.',
        INVALID_PASSWORD: 'The password is invalid or the user does not have a password.',
        USER_DISABLED: 'The user account has been disabled by an administrator.',
    }
};

export const filterType = {
    ALL: 'ALL',
    COMPLETED: 'COMPLETED',
    ACTIVE: 'ACTIVE',
}

export const checkValidity = ( value, rules ) => {
    let isValid = true;
    if ( !rules ) {
        return true;
    }
    
    if ( rules.required ) {
        isValid = value.trim() !== '' && isValid;
    }
    
    if ( rules.minLength ) {
        isValid = value.length >= rules.minLength && isValid
    }
    
    if ( rules.maxLength ) {
        isValid = value.length <= rules.maxLength && isValid
    }
    
    if ( rules.isEmail ) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test( value ) && isValid
    }
    
    if ( rules.isNumeric ) {
        const pattern = /^\d+$/;
        isValid = pattern.test( value ) && isValid
    }
    
    return isValid;
}

export const createIndex = (objArr) => {
    let newArr = objArr.map(obj => obj.index)
    newArr.sort((a,b) => (a - b))
    if(newArr.length !== 0) {
        return newArr[newArr.length-1] + 1;
    } else return 1;
}

export function guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}
