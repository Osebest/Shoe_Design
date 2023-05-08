import React from 'react'
import CustomButton from './CustomButton'

export default function AIPicker({prompt, setPrompt, generatingImg, handleSubmit}) {
  return (
    <div className='aipicker-container'>
      <textarea 
        value={prompt}
        placeholder='Ask AI...'
        rows={5}
        className='aipicker-textarea'
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className='flex flex-wrap gap-3'>
        {generatingImg ? (
          <CustomButton 
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton 
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit("full")}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  )
}
