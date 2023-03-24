import React from 'react'
import Stories from './Stories'

function Feed() {
  return (
    <div className='flex-grow h-screen pb-44 pt-6'>
      <div>
        {/* Stories */}
        <Stories />
        {/* inputBOX */}
      </div>
    </div>
  )
}

export default Feed