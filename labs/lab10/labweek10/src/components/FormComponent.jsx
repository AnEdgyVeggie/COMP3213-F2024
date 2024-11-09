import { useState } from "react"
import './FormComponent.css'

const FormComponent = ({ setUserinfo }) => {

    const submitForm = (e) => {
        const checkbox = document.getElementById("checkbox")
        e.preventDefault()

        if (!checkbox.checked) {
            return;
        }
        const email = document.getElementById("email").value
        const name = document.getElementById("name").value
        const address = document.getElementById("address").value
        const address2 = document.getElementById("address-2").value
        const city = document.getElementById("city").value
        const province = document.getElementById("province").value
        const postalCode = document.getElementById("postal-code").value

        console.log(province)

        // if (province === "Choose...") return;

        // set user info in parent component to object made from form information
        setUserinfo({
            email: email,
            name: name,
            address: address,
            address2: address2,
            city: city,
            province: province,
            postalCode: postalCode
        })

    }
    return (
        <form onSubmit={submitForm}>
            <p><b>Data Entry Field</b></p>
            <div className='double-field' >
            <div className='subfield input-field'>
                <label htmlFor='email' >Email</label>
                <input type='email' name='email' id="email" className='sub-input' required
                placeholder="Enter Email"/>
            </div>
            <div className='subfield input-field'>
                <label htmlFor='name' >Name</label>
                <input type='text' name='name' id="name" className='sub-input' required 
                placeholder="Full Name"></input>
            </div>
            </div>

            <div className='single-field input-field'>
            <label htmlFor='address' >Address</label>
            <input type='text' name='address' id="address" className='single-input' required
            placeholder="1234 Main St"></input>
            </div>

            <div className='single-field input-field'>
            <label htmlFor='address-2' >Address2</label>
            <input type='text' name='address-2' id="address-2" className='single-input'
            placeholder=" Apartment, studio, or floor"></input>
            </div>

            <div className='triple-field'>
            <div className='subfield-2 input-field'>
                <label htmlFor='city'>City</label>
                <input type='text' name='city' id="city" className='sub-input-2' required></input>
            </div>
            <div className='subfield-2 input-field'>
                <label htmlFor='province' >Province</label>
                <select className='sub-input-2' id="province" >
                    <option>Choose...</option>
                    <option>Alberta</option>
                    <option>British Columbia</option>
                    <option>Manitoba</option>
                    <option>New Brunswick</option>
                    <option>Newfoundland and Labrador</option>
                    <option>Northwest Terriories</option>
                    <option>Nova Scotia</option>
                    <option>Nunavut</option>
                    <option>Ontario</option>
                    <option>PEI</option>
                    <option>Quebec</option>
                    <option>Saskatuan</option>
                    <option>Yukon</option>
                </select>
            </div>
            <div className='subfield-2 input-field'>
                <label htmlFor='postal-code' >Postal Code</label>
                <input type='text' name='postal-code' id="postal-code" className='sub-input-2' required></input>
            </div>
            </div>

            <div className='checkbox-input'>
            <input type="checkbox" name="checkbox" id="checkbox" required/>
            <label htmlFor='checkbox'>Agree to <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Terms and Conditions</a></label>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default FormComponent