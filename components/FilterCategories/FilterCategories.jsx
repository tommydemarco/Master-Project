import React from 'react'
import PropTypes from 'prop-types'

const FilterCategories = ({ categories, selectedCategory, setSelectedCategory }) => {
    return (
        <div className="form-group">
            <div className="select-box">
                <select 
                    className="form-control" 
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    defaultValue={selectedCategory}
                >
                    <option>All Categories</option>
                    {categories.map(category => {
                        return <option 
                                    onChange={(e) => setSelectedCategory(e.target.value)} 
                                    key={category}
                                >
                                    {category}
                                </option>
                    })}
                </select>
            </div>
        </div>
    )
}

FilterCategories.propTypes = {
    categories: PropTypes.array.isRequired,
    selectedCategory: PropTypes.string.isRequired,
    setSelectedCategory: PropTypes.func.isRequired,
}

export default FilterCategories
