import { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input';
import Button from '../button/button';
import { signUpStart } from '../../store/user/user.action';
import './sign-up-form.style.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const dispatch = useDispatch();

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async(event) => {
        event.preventDefault();

        if(formFields.password !== formFields.confirmPassword) {
            alert('The password confirmation is not matching. Please try again!');
            return;
        }

        try {
            dispatch(signUpStart(email, password, displayName))
            resetFormFields();
        } catch(error) {
            if(error.code == 'auth/email-already-in-use') {
                alert('Cannot create user, email is already in use');
            } else {
                console.log('Cannot create the user', error);
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
}

export default SignUpForm;