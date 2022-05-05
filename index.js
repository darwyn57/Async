const btnjob = document.getElementById('btn-job');
btnjob.addEventListener('click', applyToJob);

const candidat = {
    isProgammer: true,
    isCool: true
}
function applyToJob() {
    console.log('le decision est en cours...');
    startDecisionProcess().then(result => {
        console.log('result', result)
    }).catch((err) => {
        console.log('err', err);
    });
    console.log('juste après StartDecisionProcess');



}
function startDecisionProcess() {
    return new Promise((resolve, reject) => {
        console.log("Recruteur - pendant ce temps reçois d'autres candidatures");
        setTimeout(() => {
            if (candidat.isProgammer && candidat.isCool) {
                console.log("avant le resolve");
                resolve('Recruteur - Bienvenue dans notre entreprise')

            } else {
                reject("Recruteur - vous n'etes pas bienvenus dans notre entrerprise")
            }
        }, 2000);


    })
}
console.log('Après la fonction ApplyToJob');