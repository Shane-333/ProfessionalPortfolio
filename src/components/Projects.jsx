import React from "react";
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="flex flex-col max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <button onClick={() => window.location.href = git}>
                <img className="w-full rounded-t-lg h-auto object-cover" src={image} alt={title} />
            </button>
            <div className="p-4 sm:p-6 flex-grow">
                <button onClick={() => window.location.href = git}>
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </button>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-stretch m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}

export const project = [
    {
        title:'Quant Trades',
        description:'Quant Trades is a high-performance algorithmic trading system developed using Python, FastAPI, Websockets, JavaScript, and React. It allows for automated trading with real-time market data, featuring efficient trade execution and a responsive user interface. The system integrates with multiple APIs to manage trades, making it a powerful tool for stock trading strategies.',
        image: require('../assets/Quant_Trades_ss.png'),
        git:'https://github.com/Shane-333/Quant-Trades-Website',
        technologies:['HTML' ,'CSS' ,'Javasript' , 'Python']
    },
    {
        title:'Wolfe Jerky',
        description:'Wolfe Jerky is an e-commerce platform built using JavaScript, HTML, CSS, PHP, and Python. It features a responsive design for showcasing and selling a variety of jerky flavors. The platform supports secure online payments via Plaid, integrates with USPS APIs for seamless shipping and tracking, and offers customized product pages for each jerky type. With dynamic cart management and flexible shipping rates, Wolfe Jerky provides a smooth and efficient user experience for customers.',
        image: require('../assets/WolfeJerky.png'),
        git:"https://github.com/Shane-333/WolfeJerky",
        technologies:['JavaScript', 'HTML', 'CSS', 'PHP', 'Python']
    }
]

export default Projects