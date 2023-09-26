import { useEffect, useState } from "react";

const ReposList = () => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando]= useState(true);
    useEffect(() => {
        fetch('https://api.github.com/users/KwizatzHaderach/repos')
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setRepos(resJson);
                
            }, 3000);

        })
    }, []);

    return (
        <ul>
            {repos.map(repositorio => (
                <li key={repositorio.id}>
                    <b>Nome:</b> {repositorio.name}
                    <b>Linguagem:</b> {repositorio.language}
                    <a target="_blank" href={repositorio.html_url}>Visitar no Github</a>
                </li>
            ))}
            <li>Repositório</li>
        </ul>
    )
}

export default ReposList;