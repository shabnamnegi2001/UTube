import React, { useEffect, useState } from 'react';
import './createEditChannel.css'

const CreateEditChannel = ({setEditCreateChanelBtn}) => {
    const currentUser = {
        result:{
          name: "radha",
          email : "abc@gmail.com",
          joinedOn : "33-12-2039",
          desc: "hello my name is radha i am learning web development"
        }
      }

    const [name, setName] = useState(currentUser?.result.name);
    const [desc, setDesc] = useState(currentUser?.result.desc);

    const handleSubmit = () =>{
        if(!name){
            alert('Please enter your name!');
        }
        else if(!desc){
            alert('Please enter description!');
        }
        else{
            setEditCreateChanelBtn(false);
        }
    }

    useEffect(() => {
      console.log("its her in here");
    },[]);

  return (
    <div className='create-edit-channel-container'>
      <input type='submit' name='text' value={'X'} className='i-btn-x' onClick={() => {setEditCreateChanelBtn(false)
       console.log("Back to homepage") }}/>
      <div className='create-edit-channel-container2'>
        <h1>{currentUser?.result?.name? <>Edit</> : <>Create</>} Your Channel</h1>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
        <textarea type='text' rows={15}  className='i-box' value={desc} onChange={(e) => setDesc(e.target.value)} />
            <input type='submit' value={'submit'} onClick={handleSubmit} className='i-btn'/>
      </div>
    </div>
  )
}

export default CreateEditChannel;
