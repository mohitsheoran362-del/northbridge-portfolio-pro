/* Full Screen Background */
body{
    margin:0;
    padding:0;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family:'Poppins',sans-serif;
    background:linear-gradient(135deg,#0f172a,#1e293b,#3b82f6);
}

/* Glassmorphism Login Box */
.login-box{
    width:420px;
    padding:40px;
    border-radius:25px;

    background:rgba(255,255,255,0.12);
    backdrop-filter:blur(20px);
    -webkit-backdrop-filter:blur(20px);

    border:1px solid rgba(255,255,255,0.2);

    box-shadow:
        0 8px 32px rgba(0,0,0,0.3),
        inset 0 1px 1px rgba(255,255,255,0.2);

    text-align:center;
}

/* Heading */
.login-box h2{
    color:white;
    font-size:32px;
    margin-bottom:30px;
    text-shadow:0 2px 10px rgba(0,0,0,0.3);
}

/* Username & Password */
.login-box input{
    width:100%;
    padding:16px 20px;
    margin:12px 0;

    border:none;
    outline:none;

    border-radius:15px;

    background:rgba(255,255,255,0.15);
    color:white;
    font-size:18px;

    box-sizing:border-box;
}

.login-box input::placeholder{
    color:rgba(255,255,255,0.8);
}

/* Login Button */
.login-box button{
    width:100%;
    padding:16px;
    margin-top:15px;

    border:none;
    border-radius:15px;

    background:linear-gradient(45deg,#00c6ff,#0072ff);
    color:white;

    font-size:18px;
    font-weight:bold;

    cursor:pointer;
    transition:0.3s;
}

.login-box button:hover{
    transform:translateY(-3px);
    box-shadow:0 10px 25px rgba(0,114,255,0.5);
}

/* Error Message */
#message{
    color:#ffb3b3;
    margin-top:15px;
    font-size:15px;
}