import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@mui/material';
import LockOutlined from '@material-ui/icons/LockOutlined';
import { useState, useContext } from 'react';
import { Context } from '..';

const Login = () => {
    const { store } = useContext(Context)

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isRegistration, setIsRegistration] = useState(false);

    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '20px auto' };
    const avatarStyle = { backgroundColor: 'gray' };
    const textFieldStyle = { paddingBottom: '10px' };
    const btnStyle = { margin: '8px 0' };

    const onLoginClicked = async () => {
        const response = await store.login(email, password);
        console.log(response);
    }

    const onRegistrationClicked = async () => {
        const response = await store.registration(firstName, lastName, email, password);
        console.log(response);
    }


    if (!isRegistration) {
        return (
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlined /></Avatar>
                        <h2>Sign in</h2>
                    </Grid>
                    <Grid>
                        <TextField label='email' placeholder='enter email' fullWidth required style={textFieldStyle}
                            onChange={(el) => setEmail(el?.target?.value)}
                        />
                        <TextField label='password' placeholder='enter password' type="password" fullWidth required
                        style={textFieldStyle}
                            onChange={(el) => setPassword(el?.target?.value)}
                        />
                    </Grid>
                    <Button type="button" color="primary" variant="contained" fullWidth style={btnStyle}
                        onClick={() => onLoginClicked()}
                    >Sign in</Button>
                    <Typography> no account ?
                        <Link href="#" onClick={() => setIsRegistration(true)}>
                            Registration
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
        )
    } else {
        return (
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlined /></Avatar>
                        <h2>Registration</h2>
                    </Grid>
                    <Grid>
                        <TextField label='email' placeholder='enter email' fullWidth required style={textFieldStyle}
                            onChange={(el) => setEmail(el?.target?.value)}
                        />
                        <TextField label='password' placeholder='enter password' type="password" fullWidth required
                        style={textFieldStyle}
                            onChange={(el) => setPassword(el?.target?.value)}
                        />
                        <TextField label='firstName' placeholder='enter firstName' type="text" fullWidth required
                        style={textFieldStyle}
                            onChange={(el) => setFirstName(el?.target?.value)}
                        />
                        <TextField label='lastName' placeholder='enter lastname' type="text" fullWidth required
                        style={textFieldStyle}
                            onChange={(el) => setLastName(el?.target?.value)}
                        />
                    </Grid>
                    <Button type="button" color="primary" variant="contained" fullWidth style={btnStyle}
                        onClick={() => onRegistrationClicked()}
                    >Registration</Button>
                    <Typography> Do you have an account ?
                        <Link href="#" onClick={() => setIsRegistration(false)}>
                            Sign In
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
        )
    }
}

export default Login;