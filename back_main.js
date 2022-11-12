function alterarImagem(objeto, caminhoNovo) {
    document.getElementById(objeto).src = caminhoNovo
}

const local_storage_color = localStorage.getItem('local_storage_color')

if (local_storage_color === 'rgba(255, 255, 255, 0.8)') {
    document.body.style.background = 'rgba(255, 255, 255, 0.8)'
} else {
    document.body.style.background = '#333'

    for (var i = 0; i < document.getElementsByTagName('p').length; i++) {
        document.getElementsByTagName('p')[i].style.color = 'white'
    }
    for (var i = 0; i < document.getElementsByTagName('li').length; i++) {
        document.getElementsByTagName('li')[i].style.color = 'white'
    }
    for (var i = 0; i < document.getElementsByTagName('h1').length; i++) {
        document.getElementsByTagName('h1')[i].style.color = 'white'
    }
    for (var i = 0; i < document.getElementsByTagName('h4').length; i++) {
        document.getElementsByTagName('h4')[i].style.color = 'white'
    }
    for (var i = 0; i < document.getElementsByTagName('h5').length; i++) {
        document.getElementsByTagName('h5')[i].style.color = 'white'
    }


    let element = document.getElementById('gif')
    if (typeof(element) != 'undefined' && element != null) {
        page = 'main'
    } else {
        page = 'projects'
    }

    if (page === 'main'){
        document.getElementById('nav-bar').style.background = 'rgb(51, 51, 51, 0.8)'
        document.getElementById('theme').style.background = '#805AD5'
        document.getElementById('mensage').style.background = '#333'
        document.getElementById('linkPortfolio').style.background = '#81E6D9'
        document.getElementById('linkPortfolio').style.color = 'black'
        alterarImagem('icon', './images/prog.png')
        alterarImagem('iconGit', './images/GitHub.png')
        alterarImagem('iconSM', './images/moon.png')
        alterarImagem('gif', './images/prNeg.gif')
    } else {
        document.getElementById('nav-bar').style.background = 'rgb(51, 51, 51, 0.8)'
        document.getElementById('theme').style.background = '#805AD5'
        alterarImagem('icon', './images/prog.png')
        alterarImagem('iconGit', './images/GitHub.png')
        alterarImagem('iconSM', './images/moon.png')
    }

    
    localStorage.setItem('local_storage_color', " ")
}

function changeColor(color, color2, page) {
    const local_storage_color = localStorage.getItem('local_storage_color')
    console.log(local_storage_color)
    if (document.body.style.background == local_storage_color) {
        document.body.style.background = color
        for (var i = 0; i < document.getElementsByTagName('p').length; i++) {
            document.getElementsByTagName('p')[i].style.color = 'white'
        }
        for (var i = 0; i < document.getElementsByTagName('li').length; i++) {
            document.getElementsByTagName('li')[i].style.color = 'white'
        }
        for (var i = 0; i < document.getElementsByTagName('h1').length; i++) {
            document.getElementsByTagName('h1')[i].style.color = 'white'
        }
        for (var i = 0; i < document.getElementsByTagName('h4').length; i++) {
            document.getElementsByTagName('h4')[i].style.color = 'white'
        }
        for (var i = 0; i < document.getElementsByTagName('h5').length; i++) {
            document.getElementsByTagName('h5')[i].style.color = 'white'
        }
    
        if (page === 'main'){
            document.getElementById('nav-bar').style.background = 'rgb(51, 51, 51, 0.8)'
            document.getElementById('theme').style.background = '#805AD5'
            document.getElementById('mensage').style.background = '#333'
            document.getElementById('linkPortfolio').style.background = '#81E6D9'
            document.getElementById('linkPortfolio').style.color = 'black'
            alterarImagem('icon', './images/prog.png')
            alterarImagem('iconGit', './images/GitHub.png')
            alterarImagem('iconSM', './images/moon.png')
            alterarImagem('gif', './images/prNeg.gif')
        } else {
            document.getElementById('nav-bar').style.background = 'rgb(51, 51, 51, 0.8)'
            document.getElementById('theme').style.background = '#805AD5'
            alterarImagem('icon', './images/prog.png')
            alterarImagem('iconGit', './images/GitHub.png')
            alterarImagem('iconSM', './images/moon.png')
        }
    
        
        localStorage.setItem('local_storage_color', " ")
    }
    else {
        document.body.style.background = color2
        for (var i = 0; i < document.getElementsByTagName('p').length; i++) {
            document.getElementsByTagName('p')[i].style.color = 'black'
        }
        for (var i = 0; i < document.getElementsByTagName('li').length; i++) {
            document.getElementsByTagName('li')[i].style.color = 'black'
        }
        for (var i = 0; i < document.getElementsByTagName('h1').length; i++) {
            document.getElementsByTagName('h1')[i].style.color = 'black'
        }
        for (var i = 0; i < document.getElementsByTagName('h4').length; i++) {
            document.getElementsByTagName('h4')[i].style.color = 'black'
        }
        for (var i = 0; i < document.getElementsByTagName('h5').length; i++) {
            document.getElementsByTagName('h5')[i].style.color = 'black'
        }
        

        if (page === 'main'){
            document.getElementById('nav-bar').style.background = 'rgba(255, 255, 255, 0.8)'
            document.getElementById('theme').style.background = '#FBD38D'
            alterarImagem('icon', './images/progNeg.png')
            alterarImagem('iconGit', './images/GitHubNeg.png')
            alterarImagem('iconSM', './images/sun.png')
            document.getElementById('mensage').style.background = '#dcdcc8dc'
            document.getElementById('linkPortfolio').style.background = '#379795'
            document.getElementById('linkPortfolio').style.color = 'white'  
            alterarImagem('gif', './images/pr.gif')
        } else {
            document.getElementById('nav-bar').style.background = 'rgba(255, 255, 255, 0.8)'
            document.getElementById('theme').style.background = '#FBD38D'
            alterarImagem('icon', './images/progNeg.png')
            alterarImagem('iconGit', './images/GitHubNeg.png')
            alterarImagem('iconSM', './images/sun.png')
        }

        localStorage.setItem('local_storage_color', 'rgba(255, 255, 255, 0.8)');
    }
}

AOS.init({
    duration: 1000,
  });

/*
const link = document.getElementsByTagName('a')
    link.addEventListener('click', () => {
        return ''
    })
*/ 