export default function Joke(jokesData) {
    return (
        <div>
            <h2>{jokesData.setup}</h2>
            <p>{jokesData.punchline}</p>
        </div>
    )
}
