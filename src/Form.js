import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './styles/Form.scss';

export default function Form() {
    return (
        <>
            <h1 className="form-title">Try it free 7 days!</h1>
            <div className="FormContainer">
                <TextField className="TextField"
                    required
                    id="outlined-required"
                    label="First name"
                    defaultValue=""
                    variant="outlined"
                />
                <TextField className="TextField"
                    required
                    id="outlined-required"
                    label="Last name"
                    defaultValue=""
                    variant="outlined"
                />
                <TextField className="TextField"
                    required
                    id="outlined-required"
                    label="Email"
                    defaultValue=""
                    variant="outlined"
                />
                <TextField className="TextField"
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                />
                <Button variant="contained" size="large" className="Button">
                    Claim your free trial
                </Button>
                <p>*By clicking the button, you are agreeding <br />
                    to our <span>Terms and Services</span> </p>
                <p>**Just $20/month after that</p>
            </div>
        </>
    )
}
