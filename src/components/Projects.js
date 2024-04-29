import websiteImg1 from '../assets/ecommerce-websites.jpg';
import websiteImg2 from '../assets/food-ecommerce.jpg';
import websiteImg3 from '../assets/website-blog.jpg';

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'Ecoyaan project - React Js with tailwind css.',
                link: 'https://github.com/TharunL06/Ecoyaan'
            },
            {
                image: websiteImg2,
                description: 'Dashboard project - React Js with syncfusion components',
                link: 'https://github.com/TharunL06/dashboard'
            },
            {
                image: websiteImg3,
                description: 'Live - news project - React Js with bootstrap',
                link: 'https://github.com/TharunL06/live-news'
            },
            {
                image: websiteImg3,
                description: 'Ecommerce project - Django-python with frontend',
                link: 'https://github.com/TharunL06/Capstone--2'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with React, MERN, Python and Django. Also I'm building more projects using latest techstacks.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image} alt=''/>
                        <div className='project-desc'> 
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link} >View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}