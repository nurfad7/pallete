import { FC } from 'react'

const LoadingVideo: FC = () => {
  return (
    <div className="w-full h-full z-20 absolute overflow-hidden">
      <video className="h-full w-full object-cover" autoPlay loop muted playsInline>
        <source src="/videos/loading.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default LoadingVideo;