import { Button, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
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
        age: '',
        height: '',
        weight: '',
        gender: '',
    });
    const [showPassword, setShowPassword] = React.useState(false);

    const CreateAccount = () => {
        const profile: Profile = new Profile(0, formData.firstName, formData.lastName, formData.email, formData.password, parseInt(formData.age), formData.height, parseInt(formData.weight), []);
        console.log(profile);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        console.log(name, value);
        setFormData((prevState) => ({ ...prevState, [name]: value }));
        console.log(formData);
    };

  return (
    <>
        <div>Create your Account</div>
        <form onSubmit={() => {CreateAccount();}}>
            <div className="mb-4 flex">
                <FormControl className="flex-1" variant="outlined">
                    <TextField name="email" onChange={handleChange} id="email" label="Email" variant="outlined"  />
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
                </FormControl>
            </div>
            <div className="mb-4 flex">
                <FormControl className="flex-1" variant="outlined">
                    <TextField name="firstName" onChange={handleChange} value={formData.firstName} className="flex-1" id="firstName" label="First Name" variant="outlined" />
                </FormControl>
            </div>
            <div className="mb-4 flex">
                <FormControl className="flex-1" variant="outlined">
                    <TextField name="lastName" onChange={handleChange} value={formData.lastName} className="flex-1" id="lastName" label="Last Name" variant="outlined" />
                </FormControl>
            </div>
            <div className="mb-4 flex">
                <FormControl className="flex-1" variant="outlined">
                    <TextField name="age" onChange={handleChange} value={formData.age} className="flex-1" id="age" label="Age" variant="outlined" />
                </FormControl> 
            </div>
            <div className="mb-4 flex">
                <FormControl className="flex-1" variant="outlined">
                    <TextField name="height" onChange={handleChange} value={formData.height} className="flex-1" id="height" label="Height" variant="outlined" />
                </FormControl>
            </div>
            <div className="mb-4 flex">
                <FormControl className="flex-1" variant="outlined">
                <OutlinedInput
                    name="weight" 
                    onChange={handleChange}
                    value={formData.weight}
                    id="weight"
                    endAdornment={<InputAdornment position="end">lb</InputAdornment>}
                    aria-describedby="weight"
                    inputProps={{
                    'aria-label': 'weight',
                    }}
                />
                <FormHelperText id="weight-helper-text">Weight</FormHelperText>
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