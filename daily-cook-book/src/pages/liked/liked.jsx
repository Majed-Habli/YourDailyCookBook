import React, { useState,useEffect } from "react";
import styles from './liked.module.css'

const Liked = () => {
    const [recipes, setRecipes] = useState([]);
    const [searcgresult, setSearchResult] = useState([]);
    const [search, setSearch] = useState('');

    const getRecipes = async () => {
        try {

        const token = localStorage.getItem('jwtToken');
        const response = await fetch ("http://127.0.0.1:8000/api/user/all_recipes",{
            method:"GET",
            headers: {
                'Authorization': `Bearer ${token}`
            }
            });
            const data = await response.json();
            if(data.status === "success"){
                setRecipes(data.data);
            }else{
                console.log("failed to set data")
            }
        }catch(error){
            console.log("failed to call the api ",error);
        }
    }

    useEffect(()=>{
        getRecipes();
        searchFor(search);
    },[]);

    const addToLike = async (recipe_id) => {
        try {
            const body = {
                recipe_id: recipe_id
            }
            const token = localStorage.getItem('jwtToken');
            const parsebody = JSON.stringify(body);
            const response_two = await fetch ("http://127.0.0.1:8000/api/user/like_recipe",{
            method:"POST",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: parsebody

            });
            const data = await response_two.json();
            if(data.status === "success"){
                console.log("item added to likes")
            }else{
                console.log("failed to add to likes")
            }
        }catch(error){
            console.log("failed to call the api ",error);
        }
    }

    const searchFor = async (search) => {
        try {
            const token = localStorage.getItem('jwtToken');
            const response_three = await fetch (`http://127.0.0.1:8000/api/user/search_recipe/${search}`,{
            method:"GET",
            headers: {
                'Authorization': `Bearer ${token}`,
            },

            });
            const data = await response_three.json();
            if(data.status === "success"){
                console.log("item is being searched")
                setRecipes(data.data);
            }else{
                console.log("failed to search")
            }
        }catch(error){
            console.log("failed to call the api ",error);
        }
    }

    const inputChange = (event) => {
        setSearch(event.target.value);
        searchFor();
        };

    return (
        <div className={styles.container}>
            <div className={styles.top_bar}>
                {/* <input type="text" placeholder="Searchy by name, cuisine, ingredients..." value={search} onChange={inputChange}/> */}
                <button>Add recipe</button>
            </div>
            <div className={styles.body}>
                <div className={styles.page_header}>Liked recipes: </div>
                {/* <div className={styles.card_body}>

                    {recipes.map((recipe, index) =>(

                    <div key={index} className={styles.card}>
                        <div className={styles.card_left}>
                            <img src="/spiceyItalianPasta.jpg" alt="italianspicey pasta" />
                        </div>
                        <div className={styles.card_right}>
                            <div className={styles.card_right_top}>
                                <div className={styles.name}>{recipe.name}</div>
                                <div className={styles.cuisine}>{recipe.cousine}</div>
                                <div>{recipe.ingredients}</div>
                            </div>
                            <div className={styles.card_right_bottom}>
                                <button key={recipe.id} onClick={() => addToLike(recipe.id)}>like</button>
                                <button>add to cart</button>
                            </div>
                        </div>
                    </div> 
                    ))}
                </div> */}
            </div>
        </div>
    )
}

export default Liked;