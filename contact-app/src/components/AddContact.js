import React from "react";
class AddContact extends React.Component{
  render(){
    return(
        <div className="ui main">
            <h2>Add Contact </h2>
            <form className="ui form">
<div className="field">
<label>Name</label>
<input type="text" name="name" placeholder="enter you name " />
</div>
<div className="field">
<label>Number</label>
<input type="text" name="number" placeholder="enter you number " />
</div>

<button className="ui button blue">Add</button>
            </form>

        </div>
    );
  }  
}

export default AddContact;