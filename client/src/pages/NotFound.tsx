import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        },2000)
    },[])
    
    return (
        <div>This page doesn't exist!</div>
    )
}