const DemoUser = ({data, isLoading}) => (
<>
     <h1>Demo</h1>
    {console.log(data)}
    <p>{data.generalInfo?.fullName}</p>
    <p>{data.generalInfo?.position}</p>
    <p>{data.generalInfo?.summary}</p>
</>


);

export default DemoUser
