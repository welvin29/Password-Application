import React, { useState } from 'react';

function Password() {

    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    function checkPassword() {

        const upper = /[A-Z]/.test(password);
        const lower = /[a-z]/.test(password);
        const number = /[0-9]/.test(password);
        const special = /[!@#$%^&*(),.?":{}|<>_\-+=]/.test(password);
        const length = password.length >= 8;

        if (upper && lower && number && special && length) {
            setMessage('Proceed!');
            alert('Password is valid! Proceed.');
        }
        else {
            setMessage('Invalid Password! Try Again.');
            alert('Password does not meet all conditions!');
        }
    }

    return (
        <div style={{
            textAlign: 'center',
            marginTop: '100px',
            fontFamily: 'Arial'
        }}>

            <h2>Password Validation</h2>

            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ padding: '10px', width: '220px' }}
            />

            <br /><br />

            <button onClick={checkPassword}>
                Submit
            </button>

            <h3>{message}</h3>

        </div>
    );
}

export default Password;