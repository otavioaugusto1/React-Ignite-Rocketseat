interface RepositoryListProps {
    repository: {
        name: string,
        description: string,
        html_url: string
    }
}


export function ReposityItem(props: RepositoryListProps) {
    return (
        <li>
            <strong>{props.repository?.name}</strong>
            <p>{props.repository.description}</p>
            <a href={props.repository.html_url}>
                Acessar repositórios
            </a>
        </li>
    )
}