export default function InfoPersonal() {
    // retrieve array from localstorage
    let storage = localStorage.getItem("personal")
    let objPersonal = JSON.parse(storage)
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
        <div className="resume personal-block">
            <label className="label">Name</label><span>{objPersonal[0].name}</span>
            <label className="label">Address</label><span>{objPersonal[0].address}</span>
            <label className="label">Email</label><span>{objPersonal[0].email}</span>
            <label className="label">Phone</label><span>{objPersonal[0].phone}</span>          

        </div>
    )
    


    // return (
    //     <div>{objPersonal[0].name}</div>
    // )
}