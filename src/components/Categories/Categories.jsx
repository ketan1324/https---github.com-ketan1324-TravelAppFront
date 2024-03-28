import axios from "axios"
import { useEffect ,useState} from "react";
import "./Categories.css";
export const Categories=()=>{
    
    const [categories, setCategories] = useState([]);
    const [numberOfCategoriesToShow, setNumberOfCategoriesToShow] = useState(0);
   

    const handleRightButtonClick=()=>{
        setNumberOfCategoriesToShow((prev)=>prev+10);
    }
    const handleLeftButtonClick=()=>{
        setNumberOfCategoriesToShow((prev)=>prev-10);
    }
  
    useEffect(()=>{
        (async ()=>{
            try{
                const {data} = await axios.get(
                        "https://grumpy-nightshirt-jay.cyclic.app/api/category"                
            );
            const categoriesToShow = data.slice(numberOfCategoriesToShow,numberOfCategoriesToShow+10);

            setCategories(categoriesToShow);
            //setCategories(categoriesToShow);
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
                categories && categories.map(({_id,category}) => <span  key={_id}>{category}</span>)
            }
           
             <button onClick={handleRightButtonClick} >
                         <span className="material-icons-outlined">chevron_right</span>
            </button>
           
        </section>
           
    );
}


