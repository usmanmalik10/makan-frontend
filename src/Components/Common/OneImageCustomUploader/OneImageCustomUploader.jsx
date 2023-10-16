import classNames from 'classnames';
import React, { useCallback, useMemo, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { BsImage } from 'react-icons/bs';
import { toast } from 'react-toastify';



const isImageSizeValid = (file, maxImageSizeInMb) => {
    const maxSizeInBytes = maxImageSizeInMb * 1024 * 1024;
   if(file){
    return file.size > maxSizeInBytes ? false  : true ;
   }else {
    return false;
   }
  }

  
const OneImageCustomUploader = ( { file , setFile , children , isCustom}) => {
  const maxImageSize = 5;
  function clearProfile() {
    setFile({
      file : null , 
      src : '',
    });
  }
    let initialProfileState = useMemo(
        () => ({
          file: null,
          src: null,
        }),
        []
      );
      const onDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles.length === 0) {
          // No files were dropped, handle this case if needed
          return;
        }
    
        const blogImage = acceptedFiles[0];
    
        if (blogImage.type.startsWith("image/")) {
          const isValid = isImageSizeValid(blogImage, maxImageSize);
          if (isValid) {
            const fileSource = URL.createObjectURL(blogImage);
            console.log("Source URL of the image file:", fileSource);
    
            setFile({ file: blogImage, src: fileSource });
          } else {
            toast.error(`Sorry Image Size is greater than ${maxImageSize}Mb`);
            return;
          }
        } else {
          toast.error("Please upload a image");
        }
      }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
      
  
  return (
   isCustom ? <div>
     <div {...getRootProps()} >
    <input {...getInputProps()} />
    {children}
  

    </div>
      {
        file.src.length > 5 &&    <button onClick={clearProfile} className='btn-pm-sm'>Delete Image</button>
      
        }
   </div>
     : ( file.src ? (
        <div>
          <div className="inner-image-upload ">
            <img

            
              alt="Blog"
              src={file.src}
            />
          </div>

          <div class="d-flex justify-content-center ">
            <button onClick={clearProfile} className='btn-pm-sm'>Delete Image</button>
          </div>
        </div>
      )
      :
      (
        <section className="image-div-upload">
          <div {...getRootProps()} >
            <input {...getInputProps()} />

            <div
              className={
                classNames(
                  "inner-image-div-upload",
                  isDragActive ? "is-dragging" : ""
                )
              }
            >
              {!isDragActive && (
                <>
                  <BsImage fontSize={"50px"} />
                  <span>Click to Select or Drop Image</span>
                </>
              )}

              {isDragActive && (
                <>
                  <BsImage fontSize={"50px"} />
                  <span>Yeah Yeah Exactly Drop it 😃</span>
                </>
              )}
            </div>
          </div>
        </section>
      ))


  )
}

export default OneImageCustomUploader
