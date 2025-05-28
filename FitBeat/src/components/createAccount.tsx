import { Alert, Button, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from 'react'
import { Profile } from '../classes/profile';

const CreateAccount = () => {
    
    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        age: 0,
        heightFt: 0,
        heightIn: 0,
        weight: 0,
        gender: '',
    });

    const [errors, setErrors] = React.useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        age: '',
        heightFt: '',
        heightIn: '',
        weight: '',
        gender: '', 
    });

    const [showAlert, setShowAlert] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);

    const CreateAccount = () => {
        if(Object.values(errors).every(value => value === '')){
            setShowAlert(false);
            const profile: Profile = new Profile(
                0,
                formData.firstName,
                formData.lastName,
                formData.email,
                formData.password,
                formData.age,
                formData.heightFt,
                formData.heightIn,
                formData.weight,
                formData.gender,
                []
            );
        } else {
            setShowAlert(true);
        }

    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        // validation
        switch (name) {
            case 'email':
                if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)) {
                    setErrors((prevState) => ({ ...prevState, email: 'Invalid email format.' }));
                } else {
                    setErrors((prevState) => ({ ...prevState, email: '' }));
                }
            break;
            case 'password':
                if ( value!= formData.confirmPassword) {
                    setErrors((prevState) => ({ ...prevState, password: 'Password is not the same as confirm password.' }));
                }
                else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(value)) {
                    setErrors((prevState) => ({ ...prevState, password: 'Invalid Password Format' }));
                } else {
                    setErrors((prevState) => ({ ...prevState, password: '' }));
                }
            break;
            case 'confirmPassword':
                if ( value!= formData.confirmPassword) {
                    setErrors((prevState) => ({ ...prevState, confirmPassword: 'Confirmation password is not the same as password.' }));
                }
                else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(value)) {
                    setErrors((prevState) => ({ ...prevState, confirmPassword: 'Invalid password format.' }));
                } else {
                    setErrors((prevState) => ({ ...prevState, confirmPassword: '' }));
                }
            break;
            case 'firstName':
                if (!/^[a-zA-Z\s'-]{1,30}$/.test(value)) {
                    setErrors((prevState) => ({ ...prevState, firstName: 'Invalid first name' }));
                } else {
                    setErrors((prevState) => ({ ...prevState, firstName: '' }));
                }
            break;
            case 'lastName':
                if (!/^[a-zA-Z\s'-]{1,30}$/.test(value)) {
                    setErrors((prevState) => ({ ...prevState, lastName: 'Invalid last name' }));
                } else {
                    setErrors((prevState) => ({ ...prevState, lastName: '' }));
                }
            break;
            case 'age':
                if (Number.isInteger(value) || value > 0 || value < 120) {
                    setErrors((prevState) => ({ ...prevState, age: 'Invalid Age' }));
                } else {
                    setErrors((prevState) => ({ ...prevState, age: '' }));
                }
            break;
            case 'heightFt':
                if (Number.isInteger(value) || value < 0 ) {
                    setErrors((prevState) => ({ ...prevState, heightFt: 'Invalid height' }));
                } else {
                    setErrors((prevState) => ({ ...prevState, heightFt: '' }));
                }
            break;
            case 'heightIn':
                if (Number.isInteger(value) || value < 0 ) {
                    setErrors((prevState) => ({ ...prevState, heightIn: 'Invalid height' }));
                } else {
                    setErrors((prevState) => ({ ...prevState, heightIn: '' }));
                }
            break;
            case 'weight':
                if (Number.isInteger(value) || value < 0 ) {
                    setErrors((prevState) => ({ ...prevState, weight: 'Invalid weight' }));
                } else {
                    setErrors((prevState) => ({ ...prevState, weight: '' }));
                }
            break;
            case 'gender':
                if (value == '') {
                    setErrors((prevState) => ({ ...prevState, gender: 'Please select a gender' }));
                } else {
                    setErrors((prevState) => ({ ...prevState, gender: '' }));
                }
            break;
        }
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };



  return (
    <>
        <h1>Create your Account</h1>
        {showAlert ? <Alert className="mb-4" severity="error">Please fix invalid values before continuing</Alert> : null }
        <form onSubmit={() => {CreateAccount();}}>
            <div className="mb-4 flex">
                <FormControl className="flex-1" variant="outlined">
                    <TextField name="email" onChange={handleChange} id="email" label="Email" variant="outlined"  />
                    {errors.email != '' && <p className="errorMessage">{errors.email}</p>}
                </FormControl>
            </div>
            <div className="mb-4 flex">
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
            <div className="mb-4 flex">
                <FormControl className="flex-1" variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                    <OutlinedInput
                        name="confirmPassword" 
                        onChange={handleChange}
                        value= {formData.confirmPassword}
                        id="confirmPassword"
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
                    {errors.confirmPassword != '' && <p className="errorMessage">{errors.confirmPassword}</p>}
                </FormControl>
            </div>
            <div className="mb-4 flex">
                <FormControl className="flex-1" variant="outlined">
                    <TextField name="firstName" onChange={handleChange} value={formData.firstName} className="flex-1" id="firstName" label="First Name" variant="outlined" />
                    {errors.firstName != '' && <p className="errorMessage">{errors.firstName}</p>}
                </FormControl>
            </div>
            <div className="mb-4 flex">
                <FormControl className="flex-1" variant="outlined">
                    <TextField name="lastName" onChange={handleChange} value={formData.lastName} className="flex-1" id="lastName" label="Last Name" variant="outlined" />
                    {errors.lastName != '' && <p className="errorMessage">{errors.lastName}</p>}
                </FormControl>
            </div>
            <div className="mb-4 flex">
                <FormControl className="flex-1" variant="outlined">
                    <TextField name="age" type="number" onChange={handleChange} value={formData.age} className="flex-1" id="age" label="Age" variant="outlined" />
                    {errors.age != '' && <p className="errorMessage">{errors.age}</p>}
                </FormControl> 
            </div>
            <div className="mb-4 flex">
                <FormControl className="flex-1" variant="outlined">
                    <TextField name="heightFt" onChange={handleChange} value={formData.heightFt} className="flex-1" id="heightFt" label="Height" variant="outlined"
                        type="number" slotProps={{
                            input: {
                            endAdornment: <InputAdornment position="start">ft</InputAdornment>,
                            },
                    }} />
                    {errors.heightFt != '' && <p className="errorMessage">{errors.heightFt}</p>}
                </FormControl>
            </div>
            <div className="mb-4 flex">
                <FormControl className="flex-1" variant="outlined">
                    <TextField name="heightIn" onChange={handleChange} value={formData.heightIn} className="flex-1" id="heightIn" label="Height" variant="outlined"
                        type="number" slotProps={{
                            input: {
                            endAdornment: <InputAdornment position="start">in</InputAdornment>,
                            },
                    }} />
                    {errors.weight != '' && <p className="errorMessage">{errors.weight}</p>}
                </FormControl>
            </div>
            <div className="mb-4 flex">
                <FormControl className="flex-1" variant="outlined">
                    <TextField name="weight" onChange={handleChange} value={formData.weight} className="flex-1" id="weight" label="Weight" variant="outlined"
                        type="number" slotProps={{
                            input: {
                            endAdornment: <InputAdornment position="start">lb</InputAdornment>,
                            },
                    }} />
                    {errors.weight != '' && <p className="errorMessage">{errors.weight}</p>}
                </FormControl>
            </div>
            <div className="mb-4 flex">
                <FormControl className="flex-1" variant="outlined">
                        <InputLabel id="gender">Gender</InputLabel>
                        <Select
                            name="gender" 
                            onChange={handleChange}
                            labelId="gender"
                            id="gender"
                            value={formData.gender}
                            label="Gender"
                        >
                            <MenuItem value={"M"}>Male</MenuItem>
                            <MenuItem value={"F"}>Female</MenuItem>
                            <MenuItem value={"N"}>Non-Binary</MenuItem>
                        </Select>
                    {errors.gender != '' && <p className="errorMessage">{errors.gender}</p>}
                </FormControl>
            </div>
            <div className="mb-4 flex">
                <Button variant="contained" className="flex-1" onClick={ () => CreateAccount()}>Create Account</Button>
            </div>
        </form>
        
    </>
  )
}

export default CreateAccount;