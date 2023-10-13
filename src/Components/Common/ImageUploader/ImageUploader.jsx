import React from 'react'
import { BsImage } from 'react-icons/bs';
import ReactImageUploading from 'react-images-uploading';
import './ImageUploader.scss'
import { AiOutlineEdit } from 'react-icons/ai';
import { MdDeleteOutline } from 'react-icons/md';
const ImageUploader = ({images , setImages  , maxNumber}) => {
    
  
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };
  return (
    <div> <ReactImageUploading
    multiple
    value={images}
    onChange={onChange}
    maxNumber={maxNumber}
    dataURLKey="data_url"
  >
    {({
      imageList,
      onImageUpload,
      onImageRemoveAll,
      onImageUpdate,
      onImageRemove,
      isDragging,
      dragProps,
    }) => (
      // write your building UI
      <div className="upload__image-wrapper">
        <div
          style={isDragging ? { color: 'red' } : undefined}
          onClick={onImageUpload}
          {...dragProps}
          className='image-div-upload'
        >
            <div className='inner-image-div-upload'>
                
    
          <BsImage fontSize={"50px"} />
       <span>
       Click or Drop here
       </span>
            </div>
        </div>
        &nbsp;
        {
            images.length > 0 && <button onClick={onImageRemoveAll} className='btn-pm-sm '>Remove all images</button>
        }
       <div className='uploaded-images'>
       {imageList.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image['data_url']} alt="" width="100" />
            <div className="image-item__btn-wrapper">
              <button onClick={() => onImageUpdate(index)} className='edit'><AiOutlineEdit/></button>
              <button onClick={() => onImageRemove(index)} className='del'><MdDeleteOutline style={{color : 'red'}}/></button>
            </div>
          </div>
        ))}
       </div>

      </div>
    )}
  </ReactImageUploading></div>
  )
}

export default ImageUploader