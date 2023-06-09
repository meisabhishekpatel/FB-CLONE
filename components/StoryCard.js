import React from 'react'

function StoryCard(name, src, profile) {
    return (
        <div className='relative h-14 w-14'>
            <img
                className='absolute opacity-0 lg:opacity-100
            rounded-full z-50 top-10'
                src={profile}
                width={40}
                height={40}
                layout="fixed"
                objectFit="cover"
            />
            <img
                className='object-cover filter brightness-75
                rounded-full lg:rounded-3xl'
                src={src}
                layout="fill"
            />
        </div>
    )
}

export default StoryCard