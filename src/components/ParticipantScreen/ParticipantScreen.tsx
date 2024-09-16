import { useEffect } from "react";
import { reorganize } from "../../utils/helper";

function ParticipantScreen({children}: any) {
      useEffect(() => {
        reorganize()
      }, [children.length])
    
    return (
        <div  id="screen">
            <div  id="container">
               {children}
            </div>
        </div>
    )
}

export default ParticipantScreen