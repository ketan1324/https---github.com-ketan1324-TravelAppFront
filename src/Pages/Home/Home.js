import { Fragment,useEffect,useState } from "react";
import { Navbar,HotelCard,Categories } from "../../components";
import InfiniteScroll from "react-infinite-scroll-component";


import axios from "axios";
import "./Home.css"
export const Home = ()=>{
        const [hasMore,setHasMore] = useState(true);
        const [testData,setTestData] = useState([]);
        const [currentIndex,setCurrentIndex] =useState(16);
        const [hotels,setHotels]=useState([]);
        
        useEffect(()=>{
            (async ()=>{
                try
                 {
                    var {data} = await axios.get( 
                        "https://grumpy-nightshirt-jay.cyclic.app/api/hotels"
                        );
                    console.log(data)
                    setTestData(data);
                    setHotels(data?data.slice(0,16):[]);   
                 }
                catch(err)
                 {
                    console.log(err)
                 }
            })();   
        },[]);

        const fetchMoreData = ()=>{
            if(hotels.length >= testData.length){
                setHasMore(false);
                return
            }
            setTimeout(()=>{
                if(hotels &&hotels.length>0){
                    setHotels(hotels.concat(testData.slice(currentIndex,currentIndex+16)));
                    setCurrentIndex(prev=>prev+16);
                }
                else{
                    setHotels([]);
                }
            },1000)
        };
    return (
        <Fragment>
          
            <Navbar/>
            <Categories/>
            {   hotels && hotels.length > 0 ? (
                    <InfiniteScroll
                    dataLength={hotels.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={hotels.length> 0 && <h3 className="loading">  loading...</h3>}
                    endMessage={<p>You have seen it all </p>}
                    >
                     <main className="main d-flex align-center wrap gap-larger">
                            {hotels &&
                                 hotels.map((hotel)=>(
                                 <HotelCard key={hotel._id} hotel={hotel}/>
                            ))}
                        </main>
                    </InfiniteScroll>
                   ):(
                    <></>
                   )}
                
         </Fragment>
        
        );
}