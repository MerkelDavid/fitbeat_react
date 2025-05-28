import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, Card, CardContent, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router'

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = React.useState({
        email: '',
        password: '',
    });
    

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        switch (name) {
            case 'email':
                if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)) {
                    setErrors((prevState) => ({ ...prevState, email: 'Invalid email format.' }));
                } else {
                    setErrors((prevState) => ({ ...prevState, email: '' }));
                }
            break;
            case 'password':
                if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(value)) {
                    setErrors((prevState) => ({ ...prevState, password: 'Invalid Password Format' }));
                } else {
                    setErrors((prevState) => ({ ...prevState, password: '' }));
                }
            break;
        }
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const login = () => {

    }

    return (
        <Card>
            <CardContent>
                <h2>Login</h2>
                <form >
                    <div className="mb-4 flex">
                        <FormControl className="flex-1" variant="outlined">
                            <TextField name="email" onChange={handleChange} id="email" label="Email" variant="outlined"  />
                            {errors.email != '' && <p className="errorMessage">{errors.email}</p>}
                        </FormControl>
                    </div>
                    <div className="flex">
                        <FormControl className="flex-1" variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                name="password" 
                                onChange={handleChange}
                                value= {formData.password}
                                id="Password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton 
                                            aria-label={
                                                showPassword ? 'hide the password' : 'display the password'
                                            }
                                            onClick={() => setShowPassword(!showPassword)}
                                            edge="end"
                                            >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        {errors.password != '' && <p className="errorMessage">{errors.password}</p>}
                        </FormControl>
                    </div>
                    <div className= "flex">
                        <NavLink to="/createAccount" className="flex-1 link">Forgot Password?</NavLink>
                    </div>
                    <div className= "flex mb-4">
                        <NavLink to="/createAccount" className="flex-1 link">Sign Up? </NavLink>
                    </div>
                    <div className= "flex mb-4">
                        <Button variant="contained" onClick={ () => login()}>Login</Button>
                    </div>
                </form>
            </CardContent> 
        </Card>
    )
}

export default Login