import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
const GifExpertApp = () => {
    // const categories = ['One punch', 'Samurai x', 'Dragon ball']
    const [categories, setCategories] = useState(['One punch'])
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr></hr>
            <AddCategory
                setCategories={setCategories}></AddCategory>
            <ol>
                {
                    categories.map( (category, i) => {
                        return (
                            <GifGrid 
                                category={category}
                                key={category}></GifGrid>
                        )
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp