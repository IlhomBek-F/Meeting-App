import ReactPlayer from "react-player";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import './palyer.css';

export default function Player({id, videoStream, screenShareOn}: any) {
    
    const [expand, setExpand] = useState(false);

    const videoPlayer = <ReactPlayer playsinline
                                     id={id}
                                     className='player'
                                     pip={false}
                                     light={false}
                                     controls={false}
                                     muted={true}
                                     playing={true}
                                     height={'481'}
                                     width={'100%'}
                                     url={videoStream}
                                     onError={(err) => console.log(err, 'participant error')}
                                     />

    return <div className="relative">
          {videoPlayer}
         {screenShareOn && <i className="pi pi-expand" title="expand view" onClick={() => setExpand(true)}></i>}
         <Dialog className="share-modal" visible={expand} onHide={() => setExpand(false)}>{videoPlayer}</Dialog>
        </div>
}