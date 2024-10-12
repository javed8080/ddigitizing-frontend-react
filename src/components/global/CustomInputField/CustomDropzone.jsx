import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const CustomDropzone = () => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles((prevFiles) => [
      ...prevFiles,
      ...acceptedFiles.map((file) => Object.assign(file, {
        preview: URL.createObjectURL(file)
      }))
    ]);
  }, []);

  const removeFile = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': []
    },
    multiple: true
  });

  return (
    <div>
      <div
        {...getRootProps()}
        style={{
          border: '2px dashed #007bff',
          padding: '20px',
          textAlign: 'center',
          borderRadius: '5px',
          cursor: 'pointer',
          margin: '20px 0',
          backgroundColor: isDragActive ? '#e6f7ff' : '#f8f9fa'
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>Drag & drop some files here, or click to select files</p>
        )}
      </div>
      
      {/* Display file names and remove button */}
      {files.length > 0 && (
        <div>
          <h4>Uploaded Files:</h4>
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                {file.name}
                <button 
                  onClick={() => removeFile(file.name)} 
                  style={{
                    marginLeft: '10px',
                    backgroundColor: '#ff4d4f',
                    color: 'white',
                    border: 'none',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomDropzone;
