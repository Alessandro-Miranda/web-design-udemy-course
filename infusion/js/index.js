const dataImage = [
    {
        "id": 1,
        "image": "img/slider/slide-01.png"
    },
    {
        "id": 2,
        "image": "img/slider/slide-02.png"
    }
];

const dataComment = [
    {
        "id": 1,
        "comment": "Nam mi enim, auctor non ultricies a, fringilla eu risus. Praesent vitae lorem et elit tincidunt accumsan suscipit eu libero.",
        "author": "Nam mi enim, auctor non ultricies."
    },
    {
        "id": 2,
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis suscipit est, ut imperdiet tortor. Proin sed molestie massa.",
        "author": "Nam mi enim, auctor."
    }
];

const menu = () => {
    if(document.getElementById("menu").classList.contains("cabecalho__menu__nav__show"))
    {
        document.getElementById("menu").classList.remove("cabecalho__menu__nav__show");
        document.getElementById("menuLista").classList.remove("cabecalho__menu__nav__lista__show");
    }
    else
    {
        document.getElementById("menu").classList.add("cabecalho__menu__nav__show");
        document.getElementById("menuLista").classList.add("cabecalho__menu__nav__lista__show");
    }
}
const avancar = (idImagem) => {
    for(var i=0; i<dataImage.length; i++)
    {
        if(dataImage[i].id === parseInt(idImagem))
        {
            if(i+1 >= dataImage.length)
            {
                document.getElementById("slideImage").src = dataImage[0].image;
                document.getElementById("voltar").value = dataImage[0].id;
                document.getElementById("avancar").value = dataImage[0].id;
            }
            else
            {
                document.getElementById("slideImage").src = dataImage[i+1].image;
                document.getElementById("voltar").value = dataImage[i+1].id;
                document.getElementById("avancar").value = dataImage[i+1].id;
                break;
            }
        }
    }
};

const voltar = (idImagem) => {
    for(var i = 0; i < dataImage.length; i++)
    {
        if(dataImage[i].id === parseInt(idImagem))
        {
            if(i-1 < 0)
            {
                document.getElementById("slideImage").src = dataImage[dataImage.length-1].image;
                document.getElementById("voltar").value = dataImage[dataImage.length-1].id;
                document.getElementById("avancar").value = dataImage[dataImage.length-1].id;
                break;
            }
            else
            {
                document.getElementById("slideImage").src = dataImage[i-1].image;
                document.getElementById("voltar").value = dataImage[i-1].id;
                document.getElementById("avancar").value = dataImage[i-1].id;
                break;
            }
        }
    }
};

const voltarComentario = (idComentario) => {
    for(var i = 0; i < dataComment.length; i++)
    {
        if(dataComment[i].id === parseInt(idComentario))
        {
            if(i-1 < 0)
            {
                document.getElementById("comentario").textContent = dataComment[dataComment.length-1].comment;
                document.getElementById("autorComentario").textContent = dataComment[dataComment.length-1].author;
                document.getElementById("avancarComentario").value = dataComment[dataComment.length-1].id;
                document.getElementById("voltarComentario").value = dataComment[dataComment.length-1].id;
                break;
            }
            else
            {
                document.getElementById("comentario").textContent = dataComment[i-1].comment;
                document.getElementById("autorComentario").textContent = dataComment[i-1].author;
                document.getElementById("voltarComentario").value = dataComment[i-1].id;
                document.getElementById("avancarComentario").value = dataComment[i-1].id;
                break;
            }
        }
    }
};

const avancarComentario = (idComentario) => {
    for(var i=0; i<dataComment.length; i++)
    {
        if(dataComment[i].id === parseInt(idComentario))
        {
            if(i+1 >= dataComment.length)
            {
                document.getElementById("comentario").textContent = dataComment[0].comment;
                document.getElementById("autorComentario").textContent = dataComment[0].author;
                document.getElementById("voltarComentario").value = dataComment[0].id;
                document.getElementById("avancarComentario").value = dataComment[0].id;
            }
            else
            {
                document.getElementById("comentario").textContent = dataComment[i+1].comment;
                document.getElementById("autorComentario").textContent = dataComment[i+1].author;
                document.getElementById("voltarComentario").value = dataComment[i+1].id;
                document.getElementById("avancarComentario").value = dataComment[i+1].id;
                break;
            }
        }
    }
};