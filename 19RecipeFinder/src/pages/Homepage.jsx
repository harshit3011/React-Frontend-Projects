import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import RecipeCard from '../components/RecipeCard'
import { getRandomColor } from '../lib/util.js'

const APP_ID = "1a11155f"
const APP_KEY = "2309797b8a37b2b2a527fb188426fe88"

function Homepage() {
  const [recipes,setRecipes] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchRecipes= async(searchQuery)=>{
    setLoading(true);
		setRecipes([]);
		try {
			const res = await fetch(
				`https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchQuery}&type=public`
			);
			const data = await res.json();
			setRecipes(data.hits);
			console.log(data.hits);
		} catch (error) {
			console.log(error.message);
		} finally {
			setLoading(false);
		}
  }

  useEffect(()=>{
    fetchRecipes("chicken")
  },[])

  return (
    <div className='bg-[#faf9fb] p-10 flex-1'>
      <div className='max-w-screen-lg mx-auto'>
        <form>
          <label className='input shadow-md flex items-center gap-2'>
            <Search size={24}></Search>
            <input type="text" 
            className='text-sm md:text-md grow'
            placeholder='What do you want to cook doday?'
            />
          </label>
        </form>

        <h1 className='font-bold text-3xl md:text-5xl mt-4'>Recommended Recipes</h1>
				<p className='text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight'>Popular choices</p>

        <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

          {!loading && 
          
          recipes.map(({recipe},index)=>(
            <RecipeCard key={index} recipe={recipe} {...getRandomColor()}></RecipeCard>
          ))
          }
        {loading &&
						[...Array(9)].map((_, index) => (
							<div key={index} className='flex flex-col gap-4 w-full'>
								<div className='skeleton h-32 w-full'></div>
								<div className='flex justify-between'>
									<div className='skeleton h-4 w-28'></div>
									<div className='skeleton h-4 w-24'></div>
								</div>
								<div className='skeleton h-4 w-1/2'></div>
							</div>
						))}
        </div>
      </div>

    </div>
  )
}

export default Homepage