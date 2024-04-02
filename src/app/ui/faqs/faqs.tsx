'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

export default function Questions(){



    return(
    <div className="grid grid-cols-2 gap-10" > 
        <div> 
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Are your courses suitable for beginners?</AccordionTrigger>
                    <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>How do I enroll in a course?</AccordionTrigger>
                    <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Payment Methods on Mindera?</AccordionTrigger>
                    <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Is there a refund policy if I'm not satisfied with the course?</AccordionTrigger>
                    <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
        <div>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-5">
                    <AccordionTrigger>Do you offer job placement assistance or career guidance?</AccordionTrigger>
                    <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>Do you offer any discounts or promotions?</AccordionTrigger>
                    <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                    <AccordionTrigger>Can I preview course materials before enrolling?</AccordionTrigger>
                    <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                    <AccordionTrigger>Do you offer any certifications upon completion of a course?</AccordionTrigger>
                    <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
    )
}