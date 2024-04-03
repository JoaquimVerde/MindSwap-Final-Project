'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  

export default function Questions(){
    return(
    <main>
    <div className="grid grid-cols-2 gap-10" > 
        <div className="em-[2em] max-w-[30em]"> 
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>What do Mindera courses include?</AccordionTrigger>
                    <AccordionContent>
                        Our courses include access to important informational material, attending classes either in person or remotely with qualified instructors, completing exercises to enhance problem-solving skills, and simulating real work scenarios.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>How can I apply for a course?</AccordionTrigger>
                    <AccordionContent>
                        Easy peasy! Just hop onto our website, select a course, click "Apply" and you're on your way to coding glory!
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Can I preview course materials before enrolling?</AccordionTrigger>
                    <AccordionContent>
                        You can search for available courses and read the information provided for each course, and contact us if you have any questions.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Do you offer a certification upon completion of a course?</AccordionTrigger>
                    <AccordionContent>
                        Yes, we do!
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>What does the selection process look like?</AccordionTrigger>
                    <AccordionContent>
                        You apply for the course you're interested in, and then we select candidates based on their qualifications and aspirations. 
                        After this initial selection, we conduct an interview to get to know each other better.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>If I don't get selected, can I apply again in the future?</AccordionTrigger>
                    <AccordionContent>
                        Of course! We believe in second chances, third chances, and infinite chances! Keep coding and keep trying!
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>Can I change or exchange my course?</AccordionTrigger>
                    <AccordionContent>
                        You can't change your course, but you can withdraw if it's not what you expected. 
                        You won't need to pay the remaining balance if it's a longer course.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                    <AccordionTrigger>How do I pay for a course?</AccordionTrigger>
                    <AccordionContent>
                        Payment options galore! Choose your preferred method and let the learning begin!
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                    <AccordionTrigger>Is there a refund policy if I'm not satisfied?</AccordionTrigger>
                    <AccordionContent>
                        No, we do not offer refunds for paid courses
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
        <div className="em-[2em] max-w-[30em]">
            <Accordion type="single" collapsible>
                <AccordionItem value="item-9">
                    <AccordionTrigger>How do I create or log in to my account?</AccordionTrigger>
                    <AccordionContent>
                        It's as simple as 1, 2, 3! Sign up, log in, and let the coding adventures begin!
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-10">
                    <AccordionTrigger>How do I find a course?</AccordionTrigger>
                    <AccordionContent>
                        Go to out website, click on courses and navigate for all our courses.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-11">
                    <AccordionTrigger>Can I join a course online or in-person, or both?</AccordionTrigger>
                    <AccordionContent>
                        Choose your own adventure! Whether you prefer virtual voyages or in-person escapades, we've got a seat waiting for you! 
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-12">
                    <AccordionTrigger>Are these courses suitable for beginners?</AccordionTrigger>
                    <AccordionContent>
                        It depends on the course. 
                        There are courses specifically designed for beginners, while others require a certain level of prior knowledge.
                        Please consult the information for each course to get your answer.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-13">
                    <AccordionTrigger>Do you offer any payment facility for your courses?</AccordionTrigger>
                    <AccordionContent>
                        Unfortunately not. 
                        Depending on the chosen course, some courses require full payment at the time of enrollment, 
                        while others offer payment plans spread out over the total course duration.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-14">
                    <AccordionTrigger>How long is the course?</AccordionTrigger>
                    <AccordionContent>
                        Our courses have different durations depending on objectives and schedules. 
                        Please consult the information for each course to get your answer.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-15">
                    <AccordionTrigger>Do you offer job placement assistance?</AccordionTrigger>
                    <AccordionContent>
                        Yes, we provide job placement assistance and career guidance to our students. 
                        Our career services team offers support with resume building, interview preparation, and networking opportunities.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-16">
                    <AccordionTrigger>What level of English proficiency is required?</AccordionTrigger>
                    <AccordionContent>
                        A basic level of English proficiency is recommended to understand course materials and communicate effectively with instructors and peers. However, specific language requirements may vary depending on the course.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Do I need my own laptop?</AccordionTrigger>
                    <AccordionContent>
                        Yes, you do. You'll need your own laptop to embark on this tech adventure.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
    <AnyMoreQuestions/>
    </main>
    )
}

export function AnyMoreQuestions(){
    return (
        <Link href="/contact">
            <Button className="mt-4 w-full" variant="link"> 
                 More questions? Contact us</Button>
        </Link>
    )
}