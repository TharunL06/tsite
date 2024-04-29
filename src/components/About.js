import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: 'Hi, My name is Tharun L. I am a Software developer. I built beautiful Websites with React.js , Tailwind CSS + Bootstrap',
        line2: 'As a versatile software developer proficient in Python, Django, SQL, and frontend technologies (HTML, CSS, JS, React), with a keen interest in data science, my goal is to showcase my expertise and passion forbuilding robust web applications.',
        line3: 'Through my portfolio, I aim to highlight a diverse range of projects that demonstrate my skills in full-stack development, while also emphasizing my ability to leverage data science techniques for meaningful insights.'
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} alt='' />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}