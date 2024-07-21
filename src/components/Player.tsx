import ReactPlayer from "react-player";

export default function Player({id, videoStream}: any) {
    return <ReactPlayer playsinline
    id={id}
    className='player'
    pip={false}
    light={false}
    controls={false}
    muted={true}
    playing={true}
    height={'592px'}
    width={'32rem'}
    url={videoStream}
    onError={(err) => console.log(err, 'participant error')}
    />
}