
function AddForm({array,setArray}){

    function handleForm(ev){
        ev.preventDefault()
        let newArr = [...array]
        let formData = Object.fromEntries([...new FormData(ev.target)])
        formData.id = newArr.length === 0 ? 1 : newArr.at(-1).id + 1
        newArr.push(formData)
        setArray(newArr)
    }

    return (
        <form onSubmit = {handleForm}>
            <input type = "text" name = "ProductName" placeholder = "product_Name"/>
            <input type = "text" name = "ProductDesc" placeholder = "product_Description"/>
            <input type = "text" name = "ProductPrice" placeholder = "product_Price"/>
        {/* <label>
            In stock
            <input type = "checkbox" name = "active"/>
        </label> */}
        <button>ADD</button>
        </form>
    )
}

export default AddForm