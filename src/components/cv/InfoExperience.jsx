export default function InfoExperience() {
    // retrieve array from localstorage
    let storage = localStorage.getItem("experience")
    let objStorage = JSON.parse(storage)
    // console.log(objPersonal[0].name)

    // return (
    //     <div>
    //         {
    //             objPersonal.map((obj) => 
    //                 // eslint-disable-next-line react/jsx-key
    //                 <div>
    //                     {
    //                         // (obj.name != "") && <span></span>obj.name  
                            
    //                     }
    //                 </div>
    //             )
    //         }
    //     </div>
        
    // )

    return (
        <div className="resume experience-block">
            {
                objStorage.map((obj) => 
                    <div key={obj.id} className="job">
                        <div><span className="label">Date:</span> {obj.date}</div>
                        <div><span className="label">Company:</span> {obj.company}</div>
                        <div><span className="label">Position:</span> {obj.position}</div>
                        <div><span className="label">Summary:</span> {obj.summary}</div>
                    </div>
                )
            }

        </div>
    )
    
}