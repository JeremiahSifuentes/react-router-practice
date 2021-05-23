import { Link } from 'react-router-dom'

export const About: React.FC <Props> = () => {
    const postId = 5

    return (
        <div>
            <h1>About</h1>
            {/* How to add specific parameter to end of link */}
            <Link to={`/posts/${postId}`}>go to post 5</Link>
        </div>
    )
}

export default About
