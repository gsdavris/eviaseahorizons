export default function Video({ videoUrl }) {
	return (
		<video
			src={videoUrl}
			autoPlay={true}
			loop={true}
			muted={true}
			playsInline={true}
			type='video/webp'
			className='absolute w-full h-full object-cover'>
			Your browser does not support the video tag.
		</video>
	);
}
