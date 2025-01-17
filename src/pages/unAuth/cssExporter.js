const cssCode = `
#landingPage {
    width   : 100%;
    position: relative;
}

#landingPage-content {
    position  : absolute;
    width     : 100%;
    height    : 100%;
    left      : 0;
    top       : 170px;
    transition: all 0.5s linear;
}

.new-landingPage-content {
    left  : 40vw !important;
    width : 50% !important;
    height: 100vh !important;
    top   : 20px !important;
}

#dancingIcon-container {
    position        : relative;
    left            : 42.5vw;
    top             : 0;
    --size          : 100px;
    height          : var(--size);
    width           : var(--size);
    border-radius   : 50%;
    overflow        : hidden;
    z-index         : 8;
    transition      : all 1s linear;
    animation       : iconDance2 3s ease infinite forwards;
}

.new-dancingIcon-container {
    left: 25vw !important;
    top : 25vh !important;
}

#dancingIcon {
    position        : absolute;
    background-image: url("http://localhost:3000/imgs/flux.svg");
    background-size : contain;
    height          : 200%;
    width           : 200%;
    animation       : iconDance 3s ease infinite forwards;
    z-index         : 3;
    border-radius   : 50%;
    left            : -10%;
    top             : -10%;
}

#dancingIcon-container img {
    width    : 30%;
    position : absolute;
    top      : 50%;
    left     : 50%;
    transform: translate(-50%, -50%);
    z-index  : 4;
}

.animated-component {
    opacity   : 0;
    transition: all 0.5s linear;
}

.visible {
    opacity  : 1;
    transform: translateY(0);
}

.hidden-up {
    opacity  : 0;
    transform: translateY(-20px);
}

.hidden-down {
    opacity  : 0;
    transform: translateY(20px);
}

@keyframes iconDance {

    0%,
    100% {
        left: -20%;
        top : -20%;
    }

    30% {
        left: -20%;
        top : -80%;
    }

    60% {
        left: -80%;
        top : -40%;
    }
}

@keyframes iconDance2 {

    0%,
    100% {
        transform: translate(20%, 20%);
    }

    30% {
        transform: translate(20%, 80%);
    }

    60% {
        transform: translate(80%, 40%);
    }
}

.btn {
    border   : none;
    outline  : none;
    font-size: 0.85rem;
    cursor   : pointer;
}

.gradientBtn {
    border-radius      : 20px;
    background-image   : url("http://localhost:3000/imgs/darkFlux-cBlue.svg");
    background-size    : cover;
    background-position: center;
    color              : var(--whiteTxt);
    font-weight        : 600;
    letter-spacing     : 0.02rem;
    font-size          : 0.9rem;
}

.strechBtn {
    width        : 13rem;
    height       : 3.5rem;
    display      : grid;
    place-content: center;
}

.greyBtn {
    border-radius   : 20px;
    background-color: rgb(34, 34, 34);
    color           : var(--whiteTxt);
    font-weight     : 600;
}

h2 {
    color      : var(--whiteTxt);
    font-weight: 400;
}

.greyText {
    color: #696969;
}

.landing-account {
    margin        : auto;
    display       : flex;
    flex-direction: column;
    align-items   : center;
}

.landing-account>* {
    margin-top: 2rem;
}

.landing-account .madeby {
    font-size : 0.8rem;
    text-align: center;
    width     : 10rem;
}

a {
    text-decoration: none;
}

input {
    outline      : none;
    border-radius: 20px;
    padding      : 15px 15px;
    width        : 13rem;
    background   : transparent;
    color        : var(--whiteTxt);
}

.bigInputs {
    outline     : none;
    border-width: 2px;
    border-style: solid;
    border-image: linear-gradient(to left, darkblue, darkorchid) 1;
}

#errMsg {
    font-size : 0.8rem;
    color     : red;
    margin-top: 0.2rem;
}

#whiteMsg {
    margin-top: 0.5rem;
    font-size : 0.9rem;
    cursor    : pointer;
}
`;

export default cssCode;