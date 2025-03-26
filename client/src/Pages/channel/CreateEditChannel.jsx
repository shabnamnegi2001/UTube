import React, { useEffect, useState } from 'react';
import './createEditChannel.css';
import { useSelector } from 'react-redux';
import {updatechaneldata} from '../../Action/channeluser';
import { useDispatch } from 'react-redux';
import { login } from '../../Action/auth';

const CreateEditChannel = ({setEditCreateChanelBtn}) => {

  const currentUser = useSelector(state => state.currentuserreducer);
  const [name, setName] = useState(currentUser?.result.name);
  const [desc, setDesc] = useState(currentUser?.result.desc);
  const dispatch = useDispatch();

    const handleSubmit = () =>{
        if(!name){
            alert('Please enter your name!');
        }
        else if(!desc){
            alert('Please enter description!');
        }
        else{
          dispatch(updatechaneldata(currentUser?.result._id, {name:name, desc:desc}))
            setEditCreateChanelBtn(false);
            setTimeout(() => {
              dispatch(login({email:currentUser.result.email}))
            },5000)
        }
    }


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
