import { unstable_noStore as noStore } from 'next/cache';
import {Person} from "@/app/lib/definitions";
import {fetchPersonById} from "@/app/lib/data";
export async function fetchPersonByRole(): Promise<string> {
  noStore();

    try {

      //get login info => person id
      //const personId = fetchPersonById();
      //filter by role
      // side bar adjustments depending on the person's role

      const response = await fetch('http://localhost:8080/api/v1/persons/role/:role');
      if(!response.ok) {
        throw new Error('Failed to fetch person by role.');
      }

      const person: Person = await response.json();

      return person.role;
    } catch (error) {
      console.error('Database error:', error);
        throw new Error('Failed to fetch person by role.');
    }
}

