import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload as UploadIcon } from 'lucide-react';

export const Upload: React.FC = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Handle file upload logic here
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/epub+zip': ['.epub'],
    },
  });

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Upload Your eBook</h1>
      
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
          ${isDragActive 
            ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20' 
            : 'border-gray-300 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500'
          }`}
      >
        <input {...getInputProps()} />
        <UploadIcon className="w-12 h-12 mx-auto mb-4 text-purple-500" />
        <p className="text-lg mb-2">
          {isDragActive
            ? "Drop your eBook here"
            : "Drag & drop your eBook here, or click to select"}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Supported formats: PDF, EPUB
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">What happens next?</h2>
        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
          <li>• Your eBook will be processed by our AI</li>
          <li>• Convert to audiobook format</li>
          <li>• Generate a comprehensive summary</li>
          <li>• Enable chat functionality with your book</li>
        </ul>
      </div>
    </div>
  );
};