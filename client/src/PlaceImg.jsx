export default function PlaceImg({place,index=0,className}){
    if(!place.photos?.length){
        return '';
    }
    if(!className){
        className = 'object-cover'
    }
    return(
        <img className={className} src={'https://airbnb-clone-new.onrender.com/uploads/'+place.photos[index]}  alt=""/>
    );
}