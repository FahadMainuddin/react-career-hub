import { useEffect, useState } from "react";

const CategoriesList = () => {
    const  [categories, setCategories] = useState([]);

    useEffect(() => { 

        fetch('categories.json')
           .then(res => res.json ())
           .then (data => setCategorie (data));
    
      }, []);
    return (
        <div className=" border border-purple-400 mt-20 mb-8">
            <h2 className="text-4xl text-center font-semibold" >Categories Lists : {categories.length}</h2>
            <p className=" text-xl text-slate-500 text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
     <br />
     <div>
         {

          categories.map( category => <SingleCategory key={categories.id} category ={category}></SingleCategory> )

         }

     </div>


        </div>
    );
};

export default CategoriesList;