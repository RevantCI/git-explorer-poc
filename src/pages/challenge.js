// Challenge 1 of 3: Add and remove a CSS class 
import { useState } from "react";

export default function Picture() {
  const [imageBackground, setImageBackground] = useState(false)
  const [divBackground, setDivBackground] = useState(false)
  function toggleBackground(event, type){
    event.stopPropagation();
    if(type == "img"){
      setImageBackground(true)
      setDivBackground(false)
    }else{
      setDivBackground(true)
      setImageBackground(false)
    }
  }
  return (
    <div onClick = {(event) => toggleBackground(event, "div")} className={divBackground ? "background background--active" : "background"}>
      <img
        onClick = {(event) => toggleBackground(event, "img")}
        className={imageBackground ? "picture--active picture" : "picture"}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}

// Challenge 2 of 3: Profile editor 
import { useState } from "react";
export default function EditProfile() {
  const [firstname, setFirstname] = useState("Jane")
  const [lastname, setLastname] = useState("Jacobs")
  const [showEdit, setShowEdit] = useState(true)
  
  function handleEdit(event){
    event.preventDefault();
    setShowEdit((prev)=>!prev)
  }

  return (
    <form>
      <label>
        First name:{' '}
        {showEdit ? <b>{firstname}</b>
        : <input value = {firstname} onChange={(e) => setFirstname(e.target.value)}/>}
      </label>
      <label>
        Last name:{' '}
        {showEdit ? <b>{lastname}</b>
        : <input value = {lastname} onChange={(e) => setLastname(e.target.value)}/>}
      </label>
      <button type="submit" onClick={handleEdit}>
        {showEdit ? "Edit Profile" : "Save Profile"}
      </button>
      <p><i>Hello, {firstname} {lastname}!</i></p>
    </form>
  );
}