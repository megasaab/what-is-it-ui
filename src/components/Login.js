import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@mui/material';
import LockOutlined from '@material-ui/icons/LockOutlined';
import { useState } from 'react';
import axios from 'axios'

const Login = () => {

    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '20px auto' };
    const avatarStyle = { backgroundColor: 'gray' };
    const textFieldStyle = { paddingBottom: '10px' };
    const btnStyle = { margin: '8px 0' };

    const onLoginClicked = async () => {
        const response = await axios.get('http://localhost:5000/users/all');
        console.log(response);
        console.log(password, username);
    }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlined /></Avatar>
                    <h2>Sign in</h2>
                </Grid>
                <Grid>
                    <TextField label='username' placeholder='enter username' fullWidth required style={textFieldStyle}
                        onChange={(el) => setUsername(el?.target?.value)}
                    />
                    <TextField label='password' placeholder='enter password' type="password" fullWidth required
                        onChange={(el) => setPassword(el?.target?.value)}
                    />
                    <FormControlLabel
                        control={

                            <Checkbox
                                name='checkedB'
                                color='primary'
                            />
                        }
                        label="remember me"
                    />
                </Grid>
                <Button type="button" color="primary" variant="contained" fullWidth style={btnStyle}
                    onClick={() => onLoginClicked()}
                >Sign in</Button>
                <Typography> Do you have an account ?
                    <Link href="#">
                        Sign up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login;