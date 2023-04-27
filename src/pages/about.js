import React from "react";
import guitarCat from "../../public/images/about/guitar_cat.jpg"
import Image from "next/image";

const About = () => {
    return (
        <main className="flex justify-center">
            <div className="flex gap-10 lg:flex-row flex-col items-center">
                <Image src={guitarCat} alt="Cat between two guitars" width={350} height={300} className="rounded-xl drop-shadow-md" />
                <div className="flex flex-col text-left space-y-4 max-w-md">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie augue sit amet purus feugiat tincidunt. Nulla a ante neque. Ut suscipit efficitur turpis vitae ultricies. 
                    Nulla mollis elit ut dui dapibus posuere. Ut viverra consectetur nisl sodales lobortis. 
                    </p>
                    <p>Vivamus tempor tortor in bibendum condimentum. Cras accumsan, orci nec blandit vulputate, dolor ligula pellentesque risus, non lobortis dui odio nec ex. Pellentesque dictum augue sit amet urna vulputate hendrerit.
                    Vivamus tempor tortor in bibendum condimentum.</p>
                    <p>Eras accumsan, orci nec blandit vulputate, dolor ligula pellentesque risus, non lobortis dui odio nec ex. Pellentesque dictum augue sit amet urna vulputate hendrerit</p>
                </div>
            </div>
        </main>
    )
}

export default About