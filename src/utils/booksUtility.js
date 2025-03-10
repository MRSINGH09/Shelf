// this function returns filtered book by name
 function findBook(data,name){
    return data.filter((book)=>book.title.toLowerCase().includes(name.toLowerCase()))
}

//this function returns a book by its id
function getBookById(data,id){
    return  data.find((book)=>book.id==id) 
}

export {findBook,getBookById}