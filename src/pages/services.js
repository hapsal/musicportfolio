import React from "react";
import guitarCat from "../../public/images/services/guitar_cat.jpg"
import webPicture from "../../public/images/services/web.jpg"
import Image from "next/image";

const Services = () => {
    return (
        <main className="flex flex-col gap-10 lg:gap-28 justify-center items-center mt-10">
            <div className="flex gap-10 lg:flex-row flex-col flex-wrap">
                <Image src={guitarCat} alt="Cat between two guitars" height={300} className="w-full lg:w-80 rounded-xl drop-shadow-md" />
                <div className="flex flex-col text-left space-y-4 max-w-md">
                    <h1 className="uppercase text-2xl drop-shadow text-violet-600">Music services</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie augue sit amet purus feugiat tincidunt. Nulla a ante neque. Ut suscipit efficitur turpis vitae ultricies. 
                    Nulla mollis elit ut dui dapibus posuere. Ut viverra consectetur nisl sodales lobortis. 
                    </p>
                    <p>Vivamus tempor tortor in bibendum condimentum. Cras accumsan, orci nec blandit vulputate, dolor ligula pellentesque risus, non lobortis dui odio nec ex. Pellentesque dictum augue sit amet urna vulputate hendrerit.
                    Vivamus tempor tortor in bibendum condimentum.</p>
                    <p>Eras accumsan, orci nec blandit vulputate, dolor ligula pellentesque risus, non lobortis dui odio nec ex. Pellentesque dictum augue sit amet urna vulputate hendrerit</p>
                </div>
            </div>
            <div className="flex gap-10 lg:flex-row flex-col flex-wrap">
                <div className="flex flex-col text-left space-y-4 max-w-md">
                    <h1 className="uppercase text-2xl drop-shadow text-violet-600">Web services</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie augue sit amet purus feugiat tincidunt. Nulla a ante neque. Ut suscipit efficitur turpis vitae ultricies. 
                    Nulla mollis elit ut dui dapibus posuere. Ut viverra consectetur nisl sodales lobortis. 
                    </p>
                    <p>Vivamus tempor tortor in bibendum condimentum. Cras accumsan, orci nec blandit vulputate, dolor ligula pellentesque risus, non lobortis dui odio nec ex. Pellentesque dictum augue sit amet urna vulputate hendrerit.
                    Vivamus tempor tortor in bibendum condimentum.</p>
                </div>
                <Image src={webPicture} alt="Code editor" height={200} className="w-full lg:w-80 rounded-xl drop-shadow-md" />
            </div>
        </main>
    )
}

export default Services