export default function Clear ({ personalState, educationState, experienceState }) {
    const personal = [{}];
    const education = [{}];
    const experience = [{}];

    function clearData() {
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

        console.log(personal)
        // personalState([{"name": "hello"}])
        // figure this out. using the above didnt' work only for Personal.
        personalState([{"name":"", "address":"", "email":"", "phone":""}])

    }
    

    // maybe turn this into a form submit to refresh? 
    return (
        <div className="clear-btn-container">
            <button className="clear-btn" onClick={clearData}>Clear</button>
        </div>
    )

}
