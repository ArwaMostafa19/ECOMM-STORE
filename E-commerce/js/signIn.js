const initSignIn = () => {
    const app = document.getElementById('app');

    Object.assign(document.body.style, {
        margin: "0",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(5px)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Segoe UI', Roboto, sans-serif",
        color: "#fff",
        overflow: "hidden"
    });

    const main = document.createElement('main');
    Object.assign(main.style, {
        flex: "1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px"
    });

    const card = document.createElement('section');
    Object.assign(card.style, {
        display: "flex",
        width: "1100px",
        height: "700px",
        borderRadius: "25px",
        overflow: "hidden",
        backgroundColor: "rgba(255, 255, 255, 0.07)",
        backdropFilter: "blur(20px)",
        webkitBackdropFilter: "blur(15px)",
        boxShadow: "1px 25px 50px rgba(0, 0, 0, 0.5)",
    });

    const visualSide = document.createElement('aside');
    Object.assign(visualSide.style, {
        flex: "1",
        background: "linear-gradient(135deg, rgba(255, 71, 87, 0.4), rgba(26, 26, 46, 0.8)), url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        color: "white"
    });


    const welcomeH2 = document.createElement('h2');
    welcomeH2.textContent = "ECOMM STORE";
    welcomeH2.style.fontSize = "45px";
    welcomeH2.style.margin = "0 0 15px 0";
    welcomeH2.style.fontWeight = "900";
    welcomeH2.style.letterSpacing = "-1px";

    const welcomeP = document.createElement('p');
    welcomeP.textContent = "Your gateway to a premium shopping experience. Sign in to explore our latest collections.";
    welcomeP.style.opacity = "0.9";
    welcomeP.style.fontSize = "17px";
    welcomeP.style.lineHeight = "1.6";

    visualSide.append(welcomeH2, welcomeP);

    const formSide = document.createElement('section');
    Object.assign(formSide.style, {
        flex: "1.2",
        padding: "60px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    });

    const h1 = document.createElement('h1');
    h1.textContent = "Sign In";
    h1.style.marginBottom = "30px";
    h1.style.fontWeight = "700";

    const fields = {};
    const createField = (placeholder, id, type = "text") => {
        const container = document.createElement('div');
        container.style.marginBottom = "20px";
        container.style.position = "relative";

        const input = document.createElement('input');
        input.type = type;
        input.placeholder = placeholder;
        Object.assign(input.style, {
            width: "100%",
            padding: "16px",
            paddingRight: type === "password" ? "45px" : "16px",
            borderRadius: "15px",
            border: "1px solid rgba(221, 118, 118, 0.3)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            color: "#7e7b7b",
            outline: "none",
            fontSize: "15px",
            transition: "all 0.3s ease",
            boxSizing: "border-box"
        });

        if (type === "password") {
            const eyeIcon = document.createElement('i');
            eyeIcon.className = "fas fa-eye";
            Object.assign(eyeIcon.style, {
                position: "absolute",
                right: "15px",
                top: "20px",
                cursor: "pointer",
                color: "rgba(124, 121, 121, 0.5)",
                fontSize: "18px",
                transition: "0.3s",
                zIndex: "10"
            });

            eyeIcon.onclick = () => {
                if (input.type === "password") {
                    input.type = "text";
                    eyeIcon.className = "fas fa-eye-slash";
                    eyeIcon.style.color = "#ff4757";
                }
                else {
                    input.type = "password";
                    eyeIcon.className = "fas fa-eye";
                    eyeIcon.style.color = "rgba(124, 121, 121, 0.5)";
                }
            };
            container.appendChild(eyeIcon);
        }
        input.onfocus = () => {
            input.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
            input.style.border = "1px solid  rgba(221, 118, 118, 0.3)";
            input.style.transform = "scale(1.02)";
        };
        input.onblur = () => {
            input.style.border = "1px solid rgba(221, 118, 118, 0.3)";
            input.style.boxShadow = "none";
            input.style.transform = "scale(1)";
        };
        const errorMsg = document.createElement('span');
        Object.assign(errorMsg.style, {
            color: "#ff4757",
            fontSize: "13px",
            display: "none",
            marginTop: "8px",
            fontWeight: "500"
        });

        container.append(input, errorMsg);
        fields[id] = { input, errorMsg };
        return container;
    };


    const emailField = createField("Email Address", "email", "email");
    const passField = createField("Password", "pass", "password");

    const submitBtn = document.createElement('button');
    submitBtn.textContent = "Login";
    Object.assign(submitBtn.style, {
        width: "100%",
        padding: "16px",
        backgroundColor: "#ff4757",
        color: "#fff",
        border: "none",
        borderRadius: "15px",
        fontWeight: "bold",
        cursor: "pointer",
        marginTop: "10px",
        fontSize: "17px",
        transition: "all 0.3s ease"
    });

    submitBtn.onmouseover = () => {
        submitBtn.style.backgroundColor = "#ff6b81";
        submitBtn.style.transform = "translateY(-3px)";
        submitBtn.style.boxShadow = "0 15px 25px rgba(255, 71, 87, 0.4)";
    };
    submitBtn.onmouseout = () => {
        submitBtn.style.backgroundColor = "#ff4757";
        submitBtn.style.transform = "translateY(0)";
        submitBtn.style.boxShadow = "none"
    };


    const footerLinks = document.createElement('div');
    footerLinks.style.marginTop = "25px";
    footerLinks.style.textAlign = "center";
    footerLinks.style.fontSize = "14px";

    const signUpLink = document.createElement('span');
    signUpLink.textContent = "Don't have an account? ";
    signUpLink.style.fontSize = "15px"
    signUpLink.style.color = "rgba(73, 72, 72, 0.6)";

    const signUpAction = document.createElement('a');
    signUpAction.textContent = "Create one";
    signUpAction.style.color = "#ff4757";
    signUpAction.style.cursor = "pointer";
    signUpAction.style.fontWeight = "700";
    signUpAction.style.fontSize = "15px"
    signUpAction.style.textDecoration = "none";
    signUpAction.onclick = () => window.location.href = "signUp.html";

    signUpLink.appendChild(signUpAction);
    footerLinks.append(signUpLink);


    const API_URL = "https://6989f94cc04d974bc6a0fecc.mockapi.io/users";

    submitBtn.onclick = async () => {
        const email = fields.email.input.value;
        const pass = fields.pass.input.value;
        let isValid = true;
        fields.email.errorMsg.style.display = "none";
        fields.pass.errorMsg.style.display = "none";
        fields.email.input.style.border = "1px solid rgba(221, 118, 118, 0.3)";
        fields.pass.input.style.border = "1px solid rgba(221, 118, 118, 0.3)";

        if (!email) {
            fields.email.errorMsg.textContent = "Email is required";
            fields.email.errorMsg.style.display = "block";
            fields.email.input.style.border = "1px solid #ff4757";
            isValid = false;
        }

        if (!pass) {
            fields.pass.errorMsg.textContent = "Password is required";
            fields.pass.errorMsg.style.display = "block";
            fields.pass.input.style.border = "1px solid #ff4757";
            isValid = false;
        }

        if (!isValid) return;

        try {
            const response = await fetch(API_URL);
            const users = await response.json();
            const user = users.find(u => u.email === email && u.password === pass);

            if (user) {
                //alert(`Welcome back, ${user.name}!`);
                window.location.href = `home.html?userId=${user.id}`;
            } else {
                fields.email.errorMsg.textContent = "Invalid email or password";
                fields.email.errorMsg.style.display = "block";
                fields.email.input.style.border = "1px solid #ff4757";
                fields.pass.input.style.border = "1px solid #ff4757";
            }
        } catch (error) {
            console.error("Login Error:", error);
            fields.email.errorMsg.textContent = "Something went wrong. Please try again.";
            fields.email.errorMsg.style.display = "block";
        }
    };

    formSide.append(h1, emailField, passField, submitBtn, footerLinks);
    card.append(visualSide, formSide);
    main.append(card);
    app.append(main);
}

document.addEventListener('DOMContentLoaded', initSignIn);