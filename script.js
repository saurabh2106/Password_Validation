console.log("Welcome to Password Validator");

// declaration of variables
let passwordInput = document.querySelector(".pass-field input");
let viewbutton = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li");

const validationprocess = [
    { regex: /[0-9]/, index: 0 }, //At least 1 number
    { regex: /[a-z]/, index: 1 }, // At least 1 lowercase letter
    { regex: /[^A-Za-z0-9]/, index: 2 }, //At least 1 special character
    { regex: /[A-Z]/, index: 3 }, //At least 1 Capital letter
    { regex: /.{8,}/, index: 4 },  //    At least 8 character length
]

passwordInput.addEventListener("keyup", (e) => {
    validationprocess.forEach(item => {
        // verify password is matching to our requirement regex
        const isValid = item.regex.test(e.target.value);
        const requirementitems = requirementList[item.index];
        // verify password requirements is matching or not then Icon change
        if (isValid) {
            requirementitems.firstElementChild.className = "fa-solid fa-check";
            requirementitems.classList.add('valid');
        }
        else {
            requirementitems.firstElementChild.className = "fa-solid fa-circle";
            requirementitems.classList.remove('valid');
        }
    })
})

// toggle input between password and text
viewbutton.addEventListener("click", () => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    viewbutton.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
}); // view the password
