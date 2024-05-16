import React from 'react';

interface PodcastCardProps {
    link: string,
    first: boolean
}

const PodcastCard: React.FC<PodcastCardProps> = ({ first, link }) => {
  return (
    <div className={`py-4`}>
        <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameBorder="0" className='podcast overflow-y-hidden sm:h-[175px] h-[190px]' sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src={link}></iframe>
    </div>
  )
}

export default PodcastCard