// доставание формы

// const form = document.forms.sign_up;

// снятие ограничений
// form.onsubmit = (e) => {
//     e.preventDefault();
//     console.log(e.target);
    
// }

// Сравнение
// const form = document.forms.sign_up;

// form.onsubmit = (e) => {
//     e.preventDefault();
//     console.log(e.target === form);  
    
// }

// доставание формы
// const form = document.forms.sign_up;

// form.onsubmit = (e) => {
//     e.preventDefault();
//     const fm = new FormData(form);

//     const user = {
//         username:fm.get("username"),
//         password:fm.get("password")
//     };


//     console.log(user);
    
    
// }

// const form = document.forms.sign_up;

// form.onsubmit = (e) => {
//     e.preventDefault();
//     const fm = new FormData(form);
//     const user = {};

//     fm.forEach((key, value) => {
//         user[key] = value
        
//     })
//     users.push(user)
//     console.log(user);
// }

// const users = [
//     {
//         name:"",
//         password:""
//     }
// ]
// console.log(users);


// const form2 = document.forms.sign_in;

// form2.onsubmit = (e) => {
//     e.preventDefault();
//     const fm = new FormData(form2);
//     const user = {};

//     fm.forEach((key, value) => {
//         user[key] = value
        
//     })

//     console.log(user);
// }
    const signUpForm = document.forms.sign_up;
    const signInForm = document.forms.sign_in;
    const users = [];

    signUpForm.onsubmit = (e) => {
        e.preventDefault();

        const fm = new FormData(signUpForm);
        const user = {};

        fm.forEach((value, key) => {
            user[key] = value;
        });


        const isExist = users.find(item => item.username === user.username);

        if (isExist) {
            return alert('User already exists');
        } else {
            users.push(user);
            alert('User signed up successfully');
        }
    };

    signInForm.onsubmit = (e) => {
        e.preventDefault();

        const fm = new FormData(signInForm);
        const user = {};

        fm.forEach((value, key) => {
            user[key] = value;
        });

        
        const foundUser = users.find(item => item.username === user.username);

        if (!foundUser) {
            return alert('User is not defined!');
        } else if (foundUser.password === user.password) {
            return alert('Logged in successfully');
        } else {
            return alert('Incorrect password');
        }
    };
