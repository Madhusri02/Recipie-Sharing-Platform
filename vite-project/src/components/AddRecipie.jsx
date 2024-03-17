import '../index.css';
import fruitsImage from '../pics/fruits.jpeg';
import handImage from '../pics/hand.png';
import barIconImage from '../pics/bar-icon.png';
import settingImage from '../pics/setting.png';
import spoonImage from '../pics/spoon.png';
import trophyImage from '../pics/trophy.png';
import widgetIconImage from '../pics/widget-icon.png';
import chefImage from '../pics/chef.jpeg';
import axios from 'axios';
// import username from '../components/Login.jsx'
import { useState } from 'react';

const Recipie_adding = () => {
//    const [user_name , setUserName] = useState("");
   const [title , setTitle] = useState("")
   const [category , setCategory] = useState("")
   const [ingredients , setIngredients] = useState("")
   const [description , setDescription] = useState('')

//    setUserName({...user_name , user_name : username })
   const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/add-recipie',{  title : title , category : category , ingredients : ingredients , description : description })
    console.log(response) 
   };

  return (
    <>

<div className="container">
    <div className="menu-bar">
    <div className='bar'>
    <img style={{marginTop:'20px'}}src={barIconImage}/>
    </div>
    <div className='icons'>
    <img style={{marginTop:'50px'}}src={widgetIconImage}/>
    <img style={{marginTop:'50px'}}src={spoonImage}/>
    <img style={{marginTop:'50px'}}src={handImage}/>
            <img style={{marginTop:'50px'}}src={settingImage}/>
            <img style={{marginTop:'50px'}}src={trophyImage}/>
            <img src={chefImage}style={{marginTop:'100px',height:'40px',width:'38px',borderRadius:'50%'}}/>
        </div>
    </div>
    <div className="form-container">
        <h1 style={{marginLeft:'150px'}}>ADD RECIPES</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="title"style={{marginRight:'100px'}}>Title:</label>
            <input type="text" id="tile" name="title" onChange={(val) => { setTitle(val.target.value) }} value={title} />
            
            </div>
            <div className="form-group">
                <label htmlFor="category"style={{marginRight:'47px'}}>Category:</label>
                <input type="text" id="category" name="category" onChange={(val) => { setCategory(val.target.value) }} value={category} />
            </div>
            <div className="form-group">
                <label htmlFor="ingredients"style={{margin:'20px 30px 0px 0px'}}>Ingredients:</label>
                <textarea id="ingredients" name="ingredients" rows="2" onChange={(val) => { setIngredients(val.target.value) }} value={ingredients}></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="description"style={{margin:'20px 30px 0px 0px'}}>Description:</label>
                <textarea id="description" name="description" rows="6" onChange={(val) => { setDescription(val.target.value) }} value={description}></textarea>
            </div>
            <br></br>
            <button id="submit"type="submit">Add Recipe</button>
        </form>
    </div>
    <div className="image">
        <img src={fruitsImage}/>
    </div>
</div>

    </>
  );
}
export default Recipie_adding;