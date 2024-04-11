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
                    <AccordionTrigger>What is Acodemy?</AccordionTrigger>
                    <AccordionContent>
                    Acodemy is an innovative online learning platform dedicated to teaching coding and software development through interactive courses, real-world projects, and one-on-one mentorship.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Who can enroll in Acodemy?</AccordionTrigger>
                    <AccordionContent>
                    Anyone with an interest in learning to code is welcome to enroll! We cater to all levels, from complete beginners to seasoned programmers looking to expand their skill set.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>What courses does Acodemy offer?</AccordionTrigger>
                    <AccordionContent>
                    Acodemy offers a range of courses in web development, app development, data science, artificial intelligence, and more. We continuously update our course catalog to include the latest programming languages and technologies.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>How are the courses structured?</AccordionTrigger>
                    <AccordionContent>
                        Your courses are structured into modules consisting of video lectures, interactive coding sessions, quizzes, and hands-on projects. Each course is designed to be self-paced, allowing you to learn at your convenience.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>Do I need any prior experience to start learning?</AccordionTrigger>
                    <AccordionContent>
                    No prior experience is necessary for our beginner courses. They're designed to take you from zero to coding confidently. For more advanced courses, prerequisites will be clearly listed.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>What support will I have access to as a student?</AccordionTrigger>
                    <AccordionContent>
                    You'll have access to our community forums, 24/7 mentor support, and live Q&A sessions to help you overcome any challenges and enhance your learning experience.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>How long does it take to complete a course?</AccordionTrigger>
                    <AccordionContent>
                    Completion time varies depending on the course and your personal pace. On average, our students complete courses in 3 to 6 months.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                    <AccordionTrigger>Are there any live classes or events?</AccordionTrigger>
                    <AccordionContent>
                    Yes, Acodemy hosts live workshops, webinars, and study groups regularly. These events are a great opportunity to interact with instructors and peers.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                    <AccordionTrigger>What kind of projects will I work on?</AccordionTrigger>
                    <AccordionContent>
                    You'll build real-world projects that can be added to your portfolio. These range from websites and applications to data analysis and machine learning models.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
        <div className="em-[2em] max-w-[30em]">
            <Accordion type="single" collapsible>
                <AccordionItem value="item-9">
                    <AccordionTrigger>Can I try a course before I commit?</AccordionTrigger>
                    <AccordionContent>
                    Absolutely! We offer a free trial that includes several lessons from different courses, allowing you to get a feel for our teaching style and platform.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-10">
                    <AccordionTrigger>What are the system requirements to take a course?</AccordionTrigger>
                    <AccordionContent>
                    You will need a computer with internet access. Our platform is web-based, so no special software is required. Any additional software needed for a course will be clearly stated.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-11">
                    <AccordionTrigger>Do you offer any certificates or credentials?</AccordionTrigger>
                    <AccordionContent>
                    Upon successful completion of a course, you will receive a digital certificate that you can add to your LinkedIn profile and share with potential employers.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-12">
                    <AccordionTrigger>How much do courses cost?</AccordionTrigger>
                    <AccordionContent>
                    We offer various pricing plans, including single-course purchases and subscription models. Prices vary depending on the course complexity and length.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-13">
                    <AccordionTrigger>Is there a community for Acodemy students?</AccordionTrigger>
                    <AccordionContent>
                    Yes, we have a vibrant online community where students can collaborate, share resources, and support each other.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-14">
                    <AccordionTrigger>What if I'm not satisfied with a course?</AccordionTrigger>
                    <AccordionContent>
                    We offer a satisfaction guarantee. If you're not happy with a course, contact us within the first 30 days for a full refund.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-15">
                    <AccordionTrigger>How does Acodemy stay updated with industry trends?</AccordionTrigger>
                    <AccordionContent>
                    Our curriculum is designed by industry experts and is continuously updated to reflect the latest trends and best practices in technology.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-16">
                    <AccordionTrigger>Are there any discounts for students or non-profits?</AccordionTrigger>
                    <AccordionContent>
                    Yes, we offer discounts for students and non-profit organizations. Please contact our support team for more information.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>How can I sign up for Acodemy?</AccordionTrigger>
                    <AccordionContent>
                    Signing up is easy! Visit our website, choose your course, and you can start learning immediately after completing the registration process.
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