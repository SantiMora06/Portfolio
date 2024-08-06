import { useState } from "react";

const Form = (props) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [terms, setTerms] = useState(true);

    const handleNameInput = e => setName(e.target.value);

    const handleEmailInput = e => setEmail(e.target.value);

    const handleDescriptionInput = e => setDescription(e.target.value);

    const handleTermsInput = e => setTerms(e.target.checked);

    const handleSubmit = e => {
        e.preventDefault();
        const newForm = { name, email, description, terms };
    }

    return (<>
        <div className="AddContact">
            <h4>Contact me</h4>

            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input
                    type="text"
                    name="title"
                    value={name}
                    onChange={handleNameInput}
                    required
                />


                <label>Email: </label>
                <input
                    type="text"
                    name="director"
                    value={email}
                    onChange={handleEmailInput}
                    required
                />

                <label>Description: </label>
                <input
                    type="number"
                    name="IMDBRating"
                    value={description}
                    onChange={handleDescriptionInput}
                    required
                />

                <label>Do you confirm that all the above data is true? </label>
                <input
                    type="checkbox"
                    name="hasOscars"
                    checked={terms}
                    onChange={handleTermsInput}
                    required
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    </>);
}

export default Form;