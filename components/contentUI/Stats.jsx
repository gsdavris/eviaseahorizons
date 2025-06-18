const Stats = ({ mode = 'dark', textAlign = 'left', data }) => {
	const { stats } = data;

	let parsedStats = [];

	try {
		parsedStats = JSON.parse(stats);
	} catch (error) {
		console.error('Error parsing stats:', error);
		parsedStats = []; // Fallback to an empty array if JSON parsing fails
	}

	return (
		<div className='py-24 sm:py-32'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div
					className={`${
						textAlign === 'center' ? 'mx-auto text-center' : 'text-left'
					} max-w-5xl mb-16`}>
					<h1
						className={`text-4xl font-bold ${
							mode === 'light' ? 'text-gray-900' : 'text-gray-100'
						} tracking-tight sm:text-6xl`}>
						{data?.title}
					</h1>
					<p
						className={`mt-6 text-lg leading-8 ${
							mode === 'light' ? 'text-gray-600' : 'text-gray-300'
						}`}>
						{data?.description}
					</p>
				</div>
				<dl className='grid grid-cols-1 gap-x-8 gap-y-16 text-left border-l border-text lg:border-none lg:grid-cols-3'>
					{stats &&
						parsedStats?.map((stat) => (
							<div
								key={stat.id}
								className='flex lg:mx-auto max-w-xs flex-col gap-y-4 lg:border-l  border-text pl-8'>
								<dt
									className={`text-base leading-7 ${
										mode === 'light' ? 'text-gray-600' : 'text-gray-300'
									}`}>
									{stat.name}
								</dt>
								<dd
									className={`order-first text-3xl font-semibold tracking-tight ${
										mode === 'light' ? 'text-gray-900' : 'text-gray-100'
									} sm:text-5xl`}>
									{stat.value}
								</dd>
							</div>
						))}
				</dl>
			</div>
		</div>
	);
};

export default Stats;
