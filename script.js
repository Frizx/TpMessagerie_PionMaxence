let compteur = 0;

function Deplacer() {
    
    const clavier = document.getElementById('clavier');
    const affichage = document.getElementById('affichage');

    const nouvelDiv = document.createElement('div');
    nouvelDiv.innerHTML = clavier.value;

    nouvelDiv.classList.add('texte');
    if (compteur % 2 === 0) {
        nouvelDiv.classList.add('droite');
    } else {
        nouvelDiv.classList.add('gauche');
    }

    affichage.appendChild(nouvelDiv);

    clavier.value = '';

    compteur++;
}

function ModifierAspectClavier() {
    const clavier = document.getElementById('clavier');
    clavier.style.width = '50%';
    clavier.style.minWidth = '400px';
    clavier.style.resize = 'vertical';
    clavier.style.overflow = 'auto';
}

window.addEventListener('load', ModifierAspectClavier);

document.getElementById('ajouter').addEventListener('click', Deplacer);
