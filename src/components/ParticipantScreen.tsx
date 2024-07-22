import { useEffect, useRef } from "react";
import { reorganize } from "../utils/helper";

function ParticipantScreen({children}: any) {
    const screen = useRef(null);
    const container = useRef(null);
    
      useEffect(() => {
        reorganize(container.current as unknown as HTMLElement)
      }, [children.length])
    
    return (
        <div ref={screen} id="screen">
            <div ref={container} id="container">
               {children}
            </div>
        </div>
    )
}

export default ParticipantScreen