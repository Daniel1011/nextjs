import Link from 'next/link';

const ownersList = [
    {v: 'car', name: 'bruno'},
    {v: 'bike', name: 'joy'},
    {v: 'air plane', name: 'john'}
]

export default function Details() {
    return <div>
        {ownersList.map(e => (
            <Link as={`/${e.v}/${e.name}`} href="/[vehicle]/[person]" > 
            <a> Navigate to {e.name}'s {e.v}</a>
            </Link>
        ))}
            
    </div>
}