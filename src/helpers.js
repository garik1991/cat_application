export const validCategoryId = (categoryId, categories) => {
    if(categories.length){
        return categories.find(category => category.id === parseInt(categoryId))
    }
}