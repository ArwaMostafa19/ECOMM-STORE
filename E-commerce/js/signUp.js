
let submitBtn;
const initSignUp = () => {
    const app = document.getElementById('app');

    Object.assign(document.body.style,
        {
            margin: "0",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f9f9f9",
            fontFamily: "'Segoe UI', Roboto, sans-serif",
            color: "#333"
        });

    const main = document.createElement('main');
    Object.assign(main.style, {
        flex: "1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px"
    });

    const card = document.createElement('section')
    Object.assign(card.style, {
        display: "flex",
        width: "1250px",
        height: "800px",
        backgroundColor: "#ffffff",
        borderRadius: "30px",
        overflow: "hidden",
        boxShadow: "0 25px 50px rgba(0,0,0,0.08)"
    });


    const visualSide = document.createElement('aside');
    Object.assign(visualSide.style, {
        flex: "0.8",
        background: "linear-gradient(135deg, rgba(255, 71, 87, 0.4), rgba(26, 26, 46, 0.8)), url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    });


    const logo = document.createElement('div');
    const l1 = document.createTextNode("ECOMM");
    const l2 = document.createElement('span');
    l2.textContent = "STORE";
    l2.style.color = "#ff4757";
    logo.style.fontSize = "24px";
    logo.style.fontWeight = "bold";
    logo.append(l1, l2);
    visualSide.appendChild(logo);


    const formSide = document.createElement('section');
    Object.assign(formSide.style, {
        flex: "1.5",
        padding: "40px 50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        backgroundColor: "#fff"
    });


    const h1 = document.createElement('h1');
    h1.textContent = "Create an account";
    h1.style.margin = "0 0 10px 0";


    const loginText = document.createElement('p');
    loginText.textContent = "Already have an account? ";
    loginText.style.color = "#ff4757";
    loginText.style.cursor = "pointer";
    loginText.style.fontWeight = "600";
    const loginLink = document.createElement('span');
    loginLink.textContent = "Log in";
    loginLink.style.color = "#777";
    loginLink.style.cursor = "pointer";
    loginLink.style.textDecoration = "underline";
    loginText.appendChild(loginLink);
    loginLink.onclick = () => {
        window.location.href = "signIn.html"
    }


    const createRow = () => {
        const row = document.createElement('div');
        row.style.display = "flex";
        row.style.gap = "50px";
        row.style.marginBottom = "15px";
        return row;
    };

    const fields = {};
    const createField = (placeholder, id, type = "text") => {
        const container = document.createElement('div');
        container.style.flex = "1";
        container.style.marginBottom = "5px";
        container.style.position = "relative";
        const input = document.createElement('input');
        input.type = type;
        input.placeholder = placeholder;
        Object.assign(input.style, {
            width: "100%",
            padding: "14px",
            marginBottom: "16px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            backgroundColor: "#fff",
            color: "#7e7b7b",
            fontSize: "14px",
            outline: "none",
            transition: "0.3s",
            paddingRight: type === "password" ? "45px" : "14px",
            boxSizing: "border-box"
        });

        if (type === "password") {
            const eyeBtn = document.createElement('i');
            eyeBtn.className = "fas fa-eye-slash";;

            Object.assign(eyeBtn.style, {
                position: "absolute",
                right: "15px",
                top: "16px",
                cursor: "pointer",
                color: "#777",
                fontSize: "16px",
                zIndex: "10"
            });

            eyeBtn.onclick = () => {
                if (input.type === "password") {
                    input.type = "text";
                    eyeBtn.className = "fas fa-eye";
                    eyeBtn.style.color = "#ff4757"
                }

                else {
                    input.type = "password";
                    eyeBtn.className = "fas fa-eye-slash";
                    eyeBtn.style.color = "#777"
                }
            };

            container.appendChild(eyeBtn);
        }
        const errorMsg = document.createElement('span');
        Object.assign(errorMsg.style, {
            color: "#ff4757",
            fontSize: "15px",
            display: "none",
            marginTop: "3px",
            fontWeight: "500"
        });
        container.append(input, errorMsg);
        fields[id] = { input, errorMsg };
        input.oninput = () => {
            input.style.border = "1px solid #bfafaf";
            input.style.boxShadow = "none";
            errorMsg.style.display = "none";
        };
        return container;
    };

    const row1 = createRow();
    row1.append(createField("Full Name", "name"), createField("Email address", "email", "email"));

    const row2 = createRow();
    row2.append(createField("Password", "pass", "password"), createField("Confirm Password", "repass", "password"));

    const row3 = createRow();
    row3.append(createField("Address", "address"), createField("Phone Number", "phone", "tel"));

    const row4 = createRow();
    row4.append(createField("Credit Card Number", "cardNum"), createField("CVV", "cvv", "password"));

    submitBtn = document.createElement('button');
    submitBtn.textContent = "Create account";
    Object.assign(submitBtn.style, {
        width: "100%",
        padding: "16px",
        backgroundColor: "#ff4757",
        color: "#fff",
        border: "none",
        borderRadius: "12px",
        fontWeight: "bold",
        fontSize: "16px",
        cursor: "pointer",
        marginTop: "10px",
        transition: "0.4s"
    });

    const showError = (id, msg) => {
        const field = fields[id];
        field.input.style.border = "1px solid #ff4757";
        field.input.style.boxShadow = "0 0 8px rgba(255, 71, 87, 0.2)";
        field.errorMsg.textContent = msg;
        field.errorMsg.style.display = "block";
    }

    const isEmpty = (id) => {
        if (!fields[id] || fields[id].input.value.trim() === "") {
            showError(id, "This field is required");
            return true;
        }
        return false;
    };

    const API_URL = "https://6989f94cc04d974bc6a0fecc.mockapi.io/users";

    async function registerUser(newUser) {
        const loader = document.createElement('div');
        Object.assign(loader.style, {
            border: "3px solid rgba(255,255,255,0.3)",
            borderTop: "3px solid #fff",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            animation: "spin 1s linear infinite",
            display: "inline-block"
        });

        submitBtn.disabled = true;
        submitBtn.textContent = "";
        submitBtn.appendChild(loader);
        submitBtn.style.cursor = "not-allowed";
        try {
            const response = await fetch(API_URL);
            const users = await response.json();

            const isEmailTaken = users.find(user => user.email === newUser.email);
            if (isEmailTaken) {
                showError("email", "This email is already registered!");
                resetSubmitBtn();
                return;
            }

            const postResponse = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser)
            });

            if (postResponse.ok) {
                const createdUser = await postResponse.json();
                //alert("Registration successful!");
                window.location.href = `home.html?userId=${createdUser.id}`;
            }

        }
        catch (error) {
            console.error("Connection Error:", error);
            alert("Something went wrong with the server.");
            resetSubmitBtn();
        }
    }
    submitBtn.onclick = () => {
        let isValid = true;

        const nameRegex = /^[a-zA-Z\sأ-ي]+$/;

        if (isEmpty("name")) {
            isValid = false;
        } else if (!nameRegex.test(fields.name.input.value)) {
            showError("name", "Name must contain only letters");
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (isEmpty("email")) {
            isValid = false;
        } else if (!emailRegex.test(fields.email.input.value)) {
            showError("email", "Please enter a valid email address");
            isValid = false;
        }


        if (isEmpty("pass")) {
            isValid = false;
        } else if (fields.pass.input.value.length < 6) {
            showError("pass", "Password must be at least 6 characters");
            isValid = false;
        }

        if (isEmpty("repass")) {
            isValid = false;
        } else if (fields.pass.input.value !== fields.repass.input.value) {
            showError("repass", "Passwords do not match");
            isValid = false;
        }


        if (isEmpty("address")) {
            isValid = false;
        }

        const phoneRegex = /^[0-9]{11}$/;
        if (isEmpty("phone")) {
            isValid = false;
        } else if (!phoneRegex.test(fields.phone.input.value)) {
            showError("phone", "Phone must be exactly 11 digits");
            isValid = false;
        }

        const cardRegex = /^[0-9]+$/;
        if (isEmpty("cardNum")) {
            isValid = false;
        } else if (!cardRegex.test(fields.cardNum.input.value)) {
            showError("cardNum", "Only numbers allowed");
            isValid = false;
        }

        if (isEmpty("cvv")) {
            isValid = false;
        } else if (!cardRegex.test(fields.cvv.input.value) || fields.cvv.input.value.length < 3) {
            showError("cvv", "Invalid CVV");
            isValid = false;
        }

        if (isValid) {
            const userData = {
                name: fields.name.input.value,
                email: fields.email.input.value,
                password: fields.pass.input.value,
                address: fields.address.input.value,
                phone: fields.phone.input.value,
                creditCard: fields.cardNum.input.value
            };
            registerUser(userData);
        }
    };


    const footerInner = document.createElement('footer');
    Object.assign(footerInner.style, {
        marginTop: "20px",
        textAlign: "center",
        fontSize: "12px",
        color: "#aaa"
    });

    const footerLogo = document.createElement('div');
    footerLogo.style.marginBottom = "5px";
    const fl1 = document.createTextNode("ECOMM");
    const fl2 = document.createElement('span');
    fl2.textContent = "STORE";
    fl2.style.color = "#ff4757";
    footerLogo.append(fl1, fl2);

    const copyright = document.createTextNode(` © 2026 All rights reserved.`);
    footerInner.append(footerLogo, copyright);
    formSide.append(h1, loginText, row1, row2, row3, row4, submitBtn, footerInner);
    card.append(visualSide, formSide);
    main.appendChild(card);
    app.appendChild(main);
}

document.addEventListener('DOMContentLoaded', initSignUp);

function resetSubmitBtn() {
    submitBtn.disabled = false;
    submitBtn.textContent = "Create account";
    submitBtn.style.cursor = "pointer";
}