class Person {
    lastName: string;
    age: number;
    married: boolean;
    constructor(lastName: string, age: number, married: boolean) {
        this.lastName = lastName;
        this.age = age;
        this.married = married;
    }

    /**
     * @returns {string}
     */
    getLastName(): string {
        return this.lastName;
    }

    /**
     * @returns {number}
     */
    getAge(): number {
        return this.age;
    }

    /**
     * @returns {boolean}
     */
    isMarried(): boolean {
        return this.married;
    }
}

class PersonFilter {
    /**
     * @param {Person} person
     * @returns {boolean}
     */
    apply(person: Person): boolean {
        throw new Error("Abstract method 'apply' must be implemented.");
    }
}

class AdultFilter extends PersonFilter {
    // Implement Adult filter
    apply(person: Person): boolean{
        return person.age >= 18;
    }
}

class SeniorFilter extends PersonFilter {
    // Implement Senior filter
    apply(person: Person): boolean {
        return person.age >= 65;
    }
}

class MarriedFilter extends PersonFilter {
    // Implement Married filter
    apply(person: Person): boolean {
        return person.married;
    }
}

class PeopleCounter {
    filter
    /**
     * @param {PersonFilter} filter
     */
    setFilter(filter: PersonFilter): void {
        if (!(filter instanceof PersonFilter)) {
            throw new Error('Filter must be an instance of PersonFilter');
        }
        this.filter = filter;
    }

    /**
     * @param {Person[]} people
     * @returns {number}
     */
    count(people: Person[]): number {
        // Implement method here
        let count = 0;
        for(let person of people){
            if(this.filter.apply(person)){
                count++;
            }
        }
        return count;
    }
}
