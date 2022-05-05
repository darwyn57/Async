const btnJob = document.getElementById('btn-job');
btnJob.addEventListener('click', applyToJob);

const candidat = {
    isProgrammer: true,
    isCool: true,
}

async function applyToJob() {
    console.log('decision en cours')
    try {
        const result = await startDecisionProcess();
        console.log('resultat :', result);
    } catch (err) {
        console.log('resultat :', err);
    }
}

function startDecisionProcess() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (candidat.isProgrammer && candidat.isCool) {
                resolve('accepté');
            } else {
                reject('refusé');
            }

        }, 2000);


    })
}

