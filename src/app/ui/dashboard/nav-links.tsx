'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    { name:'My Courses', href:'/dashboard/my-courses'},
    { name:'My Courses', href:'/dashboard/my-courses-teacher'},
    { name:'My Applied Courses', href:'/dashboard/my-courses/my-applied-c'},
    { name:'Find Courses', href:'/dashboard/find-courses'},
    { name:'Find Courses', href:'/dashboard/find-courses-teacher'},
]

export default function NavLinks() {

}