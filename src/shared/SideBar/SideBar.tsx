import { Sidebar } from "primereact/sidebar";
import { ReactNode } from "react";
import './sideBar.css';

type SideBar = {
    visible: boolean;
    children: ReactNode;
    onHide: () => void;
}

function SideBar({visible, onHide, children}: SideBar) {
    return (
        <Sidebar visible={visible} 
                 onHide={onHide} 
                 position="right" 
                 dismissable={false} 
                 modal={false} 
                 className="side-bar" >{children}
                 </Sidebar>
    )
}

export default SideBar
