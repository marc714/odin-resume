export default function InfoEducation() {
    // retrieve array from localstorage
    let storage = localStorage.getItem("education")
    let objStorage = JSON.parse(storage)



    return (
        <div className="resume experience-block">
            {
                objStorage.map((obj) => 
                    <div key={obj.id} className="school">
                        <div><span className="label">School:</span> {obj.school}</div>
                        <div><span className="label">Major:</span> {obj.major}</div>
                        <div><span className="label">Year:</span> {obj.year}</div>
                    </div>
                )
            }

        </div>
    )
    
}