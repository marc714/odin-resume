export default function Sample({ personalState, educationState, experienceState }) {

    const personal = [
        {
            "name": "Bob",
            "address": "3333 Bristol St",
            "email": "bob@gmail.com",
            "phone": "888-555-5432"

        }
    ]

    const education = [
        {
            "id": 0,
            "school": "USC",
            "major": "Business",
            "year": "1999"
        },
        {
            "id": 1,
            "school": "Stanford",
            "major": "Philosophy",
            "year": "2002"
        }
    ]

    const experience = [
        {
            "id": 0,
            "company": "Apple Computer",
            "position": "Senior President of Artificial Intelligence",
            "date": "2010-Current",
            "summary": "I built AI"
        },
        {
            "id": 2,
            "company": "Google",
            "position": "Vice President of Deep Learning",
            "date": "1999-2010",
            "summary": "I learned deeply."
        }
    ]

    function loadSample() {
        // set state
        personalState(personal)
        experienceState(experience)
        educationState(education)

        // remove old
        // localStorage.removeItem("personal")
        // localStorage.removeItem("education")
        // localStorage.removeItem("experience")

        // add
        localStorage.setItem("personal", JSON.stringify(personal))
        localStorage.setItem("education", JSON.stringify(education))
        localStorage.setItem("experience", JSON.stringify(experience))
    }
    

    // maybe turn this into a form submit to refresh? 
    return (
        <div className="sample-btn-container">
            <button className="sample-btn" onClick={loadSample}>Sample</button>
        </div>
    )

}