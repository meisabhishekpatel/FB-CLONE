import React from 'react';
import StoryCard from './StoryCard';

const stories = [
    {
        name: "Abhishek Patel",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/14v",
    },
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",
    },
    {
        name: "Jeff Bezoz",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",
    },
    {
        name: "Mark Zuckerberg",
        src: "https://i.imgur.com/Vmpr5Fl.jpeg",
        profile: "https://i.imgur.com/Vmpr5Fl.jpeg",
    },
    {
        name: "Bill Gates",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",
    },
];
function Stories() {
    return (
        <div className='flex justify-center space-x-3 mx-auto'>
            {stories.map((story) => (
                <StoryCard
                    key={story.src}
                    name={story.name}
                    src={story.src}
                    profile={story.profile}
                />
            ))}
        </div>
    );
}

export default Stories