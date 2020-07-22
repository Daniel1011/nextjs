import Link from 'next/link';

const people = [
    {v: 'car', name: 'bruno'},
    {v: 'bike', name: 'joy'},
    {v: 'air plane', name: 'john'}
]

export default function Details() {
    return <div>
        {people.map(e => (
            <Link as={`/${e.v}/${e.name}`} href="/[vehicle]/[person]" > 
            <a> Navigate to Bruno's car</a>
            </Link>
        ))}
            
    </div>
}