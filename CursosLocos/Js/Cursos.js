const Cursos =()=>
{
    const ContenidoCursos = document.getElementById('ContenidoCursos');
    const BtCursos = document.getElementById('BtCursos');

    BtCursos.addEventListener('click', ()=>
    {
        console.log('Cursos')
    }
    )
}

Cursos();