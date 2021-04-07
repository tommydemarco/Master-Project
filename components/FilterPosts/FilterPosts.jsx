import React from 'react'
import PropTypes from 'prop-types'

import FilterCategories from "../FilterCategories"

const FilterPosts = ({ categories, selectedCategory, setSelectedCategory }) => {

    return (
        <div className="widget widget_product_categories">
            <h3 className="widget-title">Filter by category</h3>
            <div className="bar"></div>
            <FilterCategories 
                categories={categories} 
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory} 
            />
        </div>
    )
}

FilterPosts.propTypes = {
    categories: PropTypes.array.isRequired,
    selectedCategory: PropTypes.string.isRequired,
    setSelectedCategory: PropTypes.func.isRequired,
}

export default FilterPosts
