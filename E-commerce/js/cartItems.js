let tableContainer = null;
let cartCounter = null;
const initCartPage = async () => {
    const app = document.getElementById('app');
    Object.assign(app.style, {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    });
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');

    if (!userId) {
        window.location.href = "signIn.html";
        return;
    }

    app.innerHTML = '';

    Object.assign(document.body.style, {
        fontFamily: "'Segoe UI', Roboto, sans-serif",
        backgroundColor: "#f8f9fa",
        margin: "0",
        padding: "40px 0",
        display: "block",
        width: "100%"
    });
    const nav = document.createElement('nav');
    Object.assign(nav.style, {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid #eee",
        top: "0",
        zIndex: "100",
        position: "fixed"
    });

    const logo = document.createElement('div');
    Object.assign(logo.style, { fontWeight: "700", fontSize: "24px", letterSpacing: "1px" });
    logo.textContent = "ECOMM";
    const logoSpan = document.createElement('span');
    logoSpan.textContent = "STORE";
    logoSpan.style.color = "#ff4757";
    logo.appendChild(logoSpan);

    const ul = document.createElement('ul');
    Object.assign(ul.style, { listStyle: "none", display: "flex", gap: "20px", alignItems: "center" });

    ['Home', 'Products', 'Contact'].forEach(text => {
        const li = document.createElement('li');
        li.style.marginLeft = "30px";
        const a = document.createElement('a');
        a.href = "#";
        a.textContent = text;
        Object.assign(a.style, {
            textDecoration: "none",
            color: "#333",
            fontWeight: "500",
            transition: "color 0.3s ease",
            padding: "20px 20px"
        });

        if (text === 'Home') {
            a.style.background = "#ff4757";
            a.style.color = "white";
            a.style.boxShadow = "0 4px 8px rgba(255, 71, 87, 0.3)";
        }

        a.onmouseover = () => {
            if (text !== 'Home') {
                a.style.backgroundColor = "#f0f0f0";
            }
        };
        a.onmouseout = () => {
            if (text !== 'Home') {
                a.style.backgroundColor = "transparent";
            }
        };
        li.appendChild(a);
        ul.appendChild(li);
    });


    const cartLi = document.createElement('li');
    cartLi.style.marginLeft = "30px";
    const cartA = document.createElement('a');
    cartA.href = "#";
    cartA.textContent = "Cart(0)";
    cartCounter = cartA;
    cartA.style.padding = "20px 20px"
    cartA.onmouseover = () => {
        cartA.style.backgroundColor = "#f0f0f0";
    }

    cartA.onmouseout = () => {
        cartA.style.backgroundColor = "transparent";
    }

    cartA.onclick = (e) => {
        if (currentUser) {
            window.location.href = `cartItems.html?userId=${currentUser.id}`;
        } else {
            //alert("Please login first");
            window.location.href = "signIn.html";
        }
    }
    Object.assign(cartA.style, { textDecoration: "none", color: "#333", fontWeight: "500" });
    cartLi.appendChild(cartA);
    ul.appendChild(cartLi);

    nav.append(logo, ul);


    const createSteps = () => {
        const stepsContainer = document.createElement('div');
        Object.assign(stepsContainer.style, {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px 0",
            gap: "50px",
            position: "relative"
        });

        const steps = [
            { id: 1, label: "CART", active: true },
            { id: 2, label: "PAYMENT", active: false },
            { id: 3, label: "DELIVERY", active: false },
            { id: 4, label: "DONE", active: false }
        ];

        steps.forEach((step, index) => {
            const stepWrapper = document.createElement('div');
            stepWrapper.style.textAlign = "center";

            const circle = document.createElement('div');
            circle.id = `step-circle-${step.id}`;
            circle.textContent = step.id;

            Object.assign(circle.style, {
                width: "60px", height: "60px", borderRadius: "50%",
                backgroundColor: step.active ? "#ff4757" : "#ffdada",
                color: step.active ? "white" : "#ff4757",
                display: "flex", justifyContent: "center", alignItems: "center",
                fontSize: "20px", fontWeight: "bold", margin: "0 auto 8px"
            });

            const label = document.createElement('span');
            label.textContent = step.label;
            Object.assign(label.style, {
                fontSize: "15px",
                fontWeight: "bold",
                color: step.active ? "#333" : "#aaa",
                letterSpacing: "1px"
            });

            stepWrapper.append(circle, label);
            stepsContainer.appendChild(stepWrapper);

            if (index < steps.length - 1) {
                const line = document.createElement('div');
                Object.assign(line.style, {
                    width: "80px",
                    height: "2px",
                    backgroundColor: "#eee",
                    marginBottom: "18px"
                })

                stepsContainer.appendChild(line);
            }
        });
        return stepsContainer;
    };
    app.appendChild(createSteps());


    const topActions = document.createElement('div');
    topActions.id = 'cart-back-actions';
    Object.assign(topActions.style, {
        width: "98%",
        maxWidth: "1600px",
        margin: "20px auto 10px auto",
        display: "flex",
        justifyContent: "flex-start"
    });

    const backToStoreBtn = document.createElement('button');
    backToStoreBtn.innerHTML = 'Continue Shopping';
    Object.assign(backToStoreBtn.style, {
        background: "none",
        border: "none",
        color: "#ff4757",
        fontSize: "18px",
        fontWeight: "600",
        cursor: "pointer",
        padding: "10px 0",
        transition: "all 0.3s ease",
        display: "flex",
        alignItems: "center",
        gap: "8px"
    });


    backToStoreBtn.onmouseover = () => {
        backToStoreBtn.style.gap = "15px";
        backToStoreBtn.style.color = "#e04050";
    };
    backToStoreBtn.onmouseout = () => {
        backToStoreBtn.style.gap = "8px";
    };

    backToStoreBtn.onclick = () => {
        window.location.href = `home.html?userId=${userId}`;
    };

    topActions.appendChild(backToStoreBtn);
    app.appendChild(topActions);
    tableContainer = document.createElement('div');
    Object.assign(tableContainer.style, {
        background: "white",
        borderRadius: "20px",
        padding: "40px 60px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
        width: "98%",
        maxWidth: "1600px",
        boxSizing: "border-box",
        margin: "20px auto"
    });

    const headerRow = document.createElement('div');
    Object.assign(headerRow.style, {
        display: "grid",
        gridTemplateColumns: "5fr 2fr 2fr 2fr 0.5fr",
        borderBottom: "1px solid #eee",
        paddingBottom: "20px",
        color: "#aaa",
        fontSize: "18px",
        fontWeight: "bold"
    });

    ['ITEMS', 'PRICE', 'QUANTITY', 'TOTAL', ''].forEach(txt => {
        const span = document.createElement('span');
        span.textContent = txt;
        headerRow.appendChild(span);
    });

    tableContainer.appendChild(headerRow);
    try {
        const response = await fetch(`https://6989f94cc04d974bc6a0fecc.mockapi.io/users/${userId}/cart`);
        const cartItems = await response.json();
        let subtotal = 0;

        cartItems.forEach(prod => {
            const itemTotal = prod.price * prod.quantity;
            subtotal += itemTotal;

            const row = document.createElement('div');
            row.classList.add('cart-row');
            Object.assign(row.style, {
                display: "grid",
                gridTemplateColumns: "5fr 2fr 2fr 2fr 0.5fr",
                alignItems: "center",
                padding: "20px 0",
                borderBottom: "1px solid #f9f9f9"
            });

            const itemCell = document.createElement('div');
            itemCell.style.display = "flex";
            itemCell.style.alignItems = "center";
            const img = document.createElement('img');
            img.src = prod.image;
            Object.assign(img.style, {
                width: "100px",
                height: "100px",
                borderRadius: "8px",
                objectFit: "cover",
                marginRight: "15px"
            });
            const name = document.createElement('span');
            name.textContent = prod.name;
            name.style.fontWeight = "600";
            name.style.fontSize = "22px"
            itemCell.append(img, name);

            const priceCell = document.createElement('span');
            priceCell.textContent = `${prod.price}`;
            priceCell.style.fontSize = "20px";

            const qtyCell = document.createElement('div');
            qtyCell.textContent = prod.quantity;
            qtyCell.style.fontWeight = "600";
            qtyCell.style.fontSize = "20px";

            const totalCell = document.createElement('span');
            totalCell.classList.add('item-total-price');
            totalCell.textContent = `$${itemTotal.toFixed(2)}`;
            totalCell.style.fontWeight = "bold";
            totalCell.style.fontSize = "25px";


            const removeBtn = document.createElement('button');
            removeBtn.innerHTML = "&times;";
            Object.assign(removeBtn.style, {
                border: "none",
                background: "none",
                color: "#ddd",
                cursor: "pointer",
                fontSize: "24px",
                width: "40px",
                height: "40px",
                transition: "color 0.3s"
            });
            removeBtn.onmouseover = () => removeBtn.style.color = "red";
            removeBtn.onmouseout = () => removeBtn.style.color = "#ddd";


            row.append(itemCell, priceCell, qtyCell, totalCell, removeBtn);
            tableContainer.appendChild(row);
            removeBtn.onclick = () => deleteItem(prod.id, userId, row);
        })

        const footerRow = document.createElement('div');
        Object.assign(footerRow.style, {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "40px",
            width: "100%"
        });
        const promoDiv = document.createElement('div');
        const promoInput = document.createElement('input');
        promoInput.placeholder = "PROMO CODE";
        Object.assign(promoInput.style, {
            padding: "12px 20px",
            border: "1px solid #eee",
            borderRadius: "25px", fontSize: "12px",
            outline: "none",
            backgroundColor: "#fcfcfc",
            fontSize: "25pcx",
            width: "170px"
        });
        promoDiv.appendChild(promoInput);

        const totalSection = document.createElement('div');
        Object.assign(totalSection.style, {
            display: "flex",
            alignItems: "center",
            gap: "60px",
        });

        const totalLabelWrapper = document.createElement('div');

        const totalSmallLabel = document.createElement('span');
        totalSmallLabel.textContent = "TOTAL";
        Object.assign(totalSmallLabel.style, {
            color: "#aaa",
            fontSize: "16px",
            display: "block"
        });

        const totalAmountText = document.createElement('span');
        totalAmountText.classList.add('total-amount-text');
        totalAmountText.textContent = `$${subtotal.toFixed(2)}`;
        Object.assign(totalAmountText.style, {
            fontSize: "26px",
            fontWeight: "bold"
        });

        totalLabelWrapper.append(totalSmallLabel, totalAmountText);

        const checkoutBtn = document.createElement('button');
        checkoutBtn.textContent = "CHECK OUT";
        Object.assign(checkoutBtn.style, {
            backgroundColor: "#ff4757", color: "white", padding: "15px 40px",
            border: "none", borderRadius: "30px", fontWeight: "bold", cursor: "pointer",
            boxShadow: "0 5px 15px rgba(255, 71, 87, 0.3)",
            width: "200px",
            fontSize: "20px"
        });

        checkoutBtn.onclick = () => {
            const rows = document.querySelectorAll('.cart-row');

            if (rows.length == 0) {
                //alert("Your cart is empty!");
                return;
            }
            showConfirmationPopup();
        }
        totalSection.append(totalLabelWrapper, checkoutBtn);
        footerRow.append(promoDiv, totalSection);
        tableContainer.appendChild(footerRow);

        app.appendChild(tableContainer);
    }
    catch (e) { console.error("Error UI", e); }
}

document.addEventListener('DOMContentLoaded', initCartPage);


const updateCartTotal = () => {

    let newSubtotal = 0;

    const rows = document.querySelectorAll('.cart-row');

    rows.forEach(row => {
        const totalText = row.querySelector('.item-total-price').textContent.replace('$', '');
        newSubtotal += parseFloat(totalText);
    });

    const totalAmountElement = document.querySelector('.total-amount-text');

    const startValue = parseFloat(totalAmountElement.textContent.replace('$', ''));
    const endValue = newSubtotal;
    const duration = 1000;
    let startTime = null;

    totalAmountElement.style.transition = "color 0.3s ease";
    totalAmountElement.style.color = "#ff4757";

    const decreseAnimate = (currentTime) => {
        if (!startTime)
            startTime = currentTime;
        const progress = currentTime - startTime;
        const percentage = Math.min(progress / duration, 1);
        const currentValue = startValue - ((startValue - endValue) * percentage);
        totalAmountElement.textContent = `$${currentValue.toFixed(2)}`;

        if (percentage < 1) {
            requestAnimationFrame(decreseAnimate);
        } else {
            setTimeout(() => {
                totalAmountElement.style.color = "#000";
            }, 200);
        }
    }
    requestAnimationFrame(decreseAnimate);
};

const deleteItem = async (apiId, userId, rowElement) => {
    Object.assign(rowElement.style, {
        transform: "translateX(-100%)",
        opacity: "0",
        transition: "all 0.6s ease-in-out",
        pointerEvents: "none"
    });

    setTimeout(async () => {
        try {
            const response = await fetch(`https://6989f94cc04d974bc6a0fecc.mockapi.io/users/${userId}/cart/${apiId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                rowElement.remove();
                updateCartTotal();
            } else {
                alert("Error Happened in delete");
                rowElement.style.transform = "translateX(0)";
                rowElement.style.opacity = "1";
            }
        } catch (error) {
            console.error("Error deleting:", error);
            rowElement.style.transform = "translateX(0)";
            rowElement.style.opacity = "1";
        }


    }, 600)
};

const showConfirmationPopup = () => {
    const overlay = document.createElement('div');
    Object.assign(overlay.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "1000"
    });

    const modal = document.createElement('div');
    Object.assign(modal.style, {
        background: "white",
        padding: "30px",
        borderRadius: "15px",
        width: "400px",
        textAlign: "center",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
    });

    const title = document.createElement('h2');
    title.textContent = "Confirm Purchase";
    title.style.color = "#333";

    const message = document.createElement('p');
    message.textContent = "Are you sure you want to complete the order with the selected items?";
    Object.assign(message.style, {
        color: "#666",
        margin: "20px 0"
    });

    const btnContainer = document.createElement('div');
    btnContainer.style.display = "flex";
    btnContainer.style.gap = "10px";
    btnContainer.style.justifyContent = "center";

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = "Cancel";
    Object.assign(cancelBtn.style, {
        padding: "10px 20px",
        border: "none", borderRadius: "5px",
        cursor: "pointer"
    });
    cancelBtn.onclick = () => overlay.remove();

    const confirmBtn = document.createElement('button');
    confirmBtn.textContent = "Confirm";
    Object.assign(confirmBtn.style, {
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        background: "#ff4757",
        color: "white",
        cursor: "pointer",
        fontWeight: "bold"
    });
    confirmBtn.onclick = () => {
        overlay.remove();
        completePaymentProcess();
    };

    btnContainer.append(cancelBtn, confirmBtn);
    modal.append(title, message, btnContainer);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
};

const completePaymentProcess = async () => {

    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');

    try {
        const response = await fetch(`https://6989f94cc04d974bc6a0fecc.mockapi.io/users/${userId}/cart`);
        const cartItems = await response.json();

        const deletePromises = cartItems.map(item =>
            fetch(`https://6989f94cc04d974bc6a0fecc.mockapi.io/users/${userId}/cart/${item.id}`, {
                method: 'DELETE'
            })
        );
        await Promise.all(deletePromises);
    } catch (err) {
        console.error("Error happened", err);
    }
    const paymentCircle = document.getElementById('step-circle-2');

    if (paymentCircle) {
        Object.assign(paymentCircle.style, {
            backgroundColor: "#ff4757",
            color: "white"
        });

        if (paymentCircle.nextSibling) {
            paymentCircle.nextSibling.style.color = "#333";
        }
    }

    if (tableContainer) {
        tableContainer.style.display = "none";
    }

    const topActions = document.getElementById('cart-back-actions');
    if (topActions) {
        topActions.style.display = "none";
    }
    const successPage = document.createElement('div');
    successPage.id = 'success-page';
    Object.assign(successPage.style, {
        textAlign: "center",
        padding: "100px 20px"
    });

    const icon = document.createElement('div');
    icon.textContent = "✓";
    Object.assign(icon.style, {
        fontSize: "100px",
        color: "#2ecc71",
        marginBottom: "20px"
    });

    const successTitle = document.createElement('h1');
    successTitle.textContent = "Payment Successful!";
    successTitle.style.fontSize = "32px";


    const successMsg = document.createElement('p');
    successMsg.textContent = "Your order has been placed and is waiting to be delivered.";
    Object.assign(successMsg.style, {
        color: "#777",
        fontSize: "18px",
        margin: "20px 0 30px"
    });


    const homeBtn = document.createElement('button');
    homeBtn.textContent = "Return to Store";
    Object.assign(homeBtn.style, {
        padding: "15px 40px",
        background: "#333",
        color: "white",
        border: "none",
        borderRadius: "30px",
        cursor: "pointer",
        fontWeight: "bold"
    });
    homeBtn.onclick = () => window.location.href = `home.html?userId=${userId}`;

    successPage.append(icon, successTitle, successMsg, homeBtn);

    const app = document.getElementById('app');
    app.appendChild(successPage);
};

