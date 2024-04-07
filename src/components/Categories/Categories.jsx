import axios from "axios"
import { useEffect ,useState} from "react";
import "./Categories.css";
import { MyUseContext } from "../../context/category-context";
export const Categories=()=>{
    
    const [categories, setCategories] = useState([]);//empty array
    const [numberOfCategoriesToShow, setNumberOfCategoriesToShow] = useState(10);//container to store the categories
    const {hotelData,setHotelData} = MyUseContext();
    console.log("value from context pls ganpati bappa :", hotelData);

    const handleRightButtonClick=()=>{
        setNumberOfCategoriesToShow((prev)=>prev+10);
    }
    const handleLeftButtonClick=()=>{
        setNumberOfCategoriesToShow((prev)=>prev-10);
    }
    const handleCategoryClick=(category)=>{
        console.log("printing all the category: ",category);
        setHotelData(category);
        console.log("printing hotel data: ",hotelData);
    }
  
    useEffect(()=>{
        (async ()=>{
            try{
                const {data} = await axios.get(
                        "https://grumpy-nightshirt-jay.cyclic.app/api/category"                
            );
            
            console.log("printing data which has all the category ",data);
            const categoriesToShow = data.slice(numberOfCategoriesToShow,numberOfCategoriesToShow+10);
            console.log("printing categories to show ",categoriesToShow)
            setCategories(categoriesToShow);
           
            }
            catch(err){
                console.log(err);
            }
        })();
    },[numberOfCategoriesToShow]);
   
    return(
        <section className=" categories d-flex align-center gap-large cursor-pointer">
            {
                numberOfCategoriesToShow>=10 &&(
                    <button onClick={handleLeftButtonClick}>
                        <span className="material-icons-outlined">chevron_left</span>
                    </button>
                )
            }
           
            {
                categories && categories.map(({_id,category}) =>
                <span  
                    className={`${category===hotelData ? "border-bottom" : ""}`}
                    key={_id} 
                    onClick={()=>handleCategoryClick(category)}
                >
                        {category}               
                </span>)
            }
           
             <button onClick={handleRightButtonClick} >
                         <span className="material-icons-outlined">chevron_right</span>
            </button>
           
        </section>
           
    );
}


