import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
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

export default NotFound