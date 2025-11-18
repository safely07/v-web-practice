export const Section = ({ title, children }) => {
	return (
		<section className='flex flex-col gap-6'>
			<h3 className='text-black text-2xl md:text-3xl font-bold text-center mb-8'>{title}</h3>
			{children}
		</section>
	);
};
