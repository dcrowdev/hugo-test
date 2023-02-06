import axios from "axios";

export default async function main() {
    console.log('Hello, world!');

    const contactForm = document.querySelector<HTMLFormElement>('#contact-form');

    contactForm?.addEventListener('submit', async e => {
        e.preventDefault();
        
        const firstName = document.querySelector<HTMLInputElement>('#firstname')?.value;
        const lastName = document.querySelector<HTMLInputElement>('#lastname')?.value;
        const fullName = `${firstName} ${lastName}`;

        const company = document.querySelector<HTMLInputElement>('#orgname')?.value;
        const email = document.querySelector<HTMLInputElement>('#inputEmail4')?.value;
        const phone = document.querySelector<HTMLInputElement>('#inputPhonenumber4')?.value;

        console.log(fullName, company, email, phone);
        axios.post('/contacts', {
            // params and what
            name: fullName,
            company,
            email,
            phone,
            content: 'this is a test'
        }).then(resp => {
            console.log(resp)
            console.log('Success!');
            // redirect to success page
            window.location.href = '#success'
        }).catch(err => `Error ${err.message}`);
    });
}