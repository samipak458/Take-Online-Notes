import React from 'react';

const Notes = ( prop )=> {

  return (
    <>
    <div className='bg-[#fef68a] rounded-lg p-3 flex flex-col shadow-lg shadow-gray-600/10'>
      <h5 className='note-title min-h-[130px] font-poppins'>{prop.text}</h5>
      <div className='flex gap-10 justify-between items-center'>
        <small className='font-roboto'>{prop.date}</small>
        <i className="fa fa-trash-o" aria-hidden="true" onClick={()=> {
           prop.handleDeleteNote(prop.id) }}></i> {/* here we are passing the id of the note to be deleted. */}
      </div>
    </div>  
    </>
  );
}

export default Notes;