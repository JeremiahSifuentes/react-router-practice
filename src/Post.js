


export const Post: React.FC<Props> = ({match}) => {
    console.log(match)
    return (<div>
        rendering post {match.params.id}
        {/* UseEffect Api call ex */}
        {/* React.useEffect(() => {
            fetch(`api.example.com/posts/${match.params.id}`)
        }, [match.params.id]) */}
    </div>)
}