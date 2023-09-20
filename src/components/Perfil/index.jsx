import './perfil.css'



//export default () =>
const Perfil = () => {
    const usuario = {
        nome: 'Mauricio Mello',
        avatar: 'https://github.com/KwizatzHaderach.png'
    }
    //return como se fosse uma função
    return (
        <div>
            <img className="perfil-avatar" src={usuario.avatar}/>
            <h3 className="perfil-titulo">{usuario.nome}</h3>
        </div>
    )
}

export default Perfil;