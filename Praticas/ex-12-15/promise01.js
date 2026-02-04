function simularChamadaAPI() {
    return new Promise((resolve, reject) => {
        console.log('Chamando API...')

        setTimeout(() => {
            const sucesso = Math.random() > 0.2; // 80% de chance de sucesso
            // ; 
            if (sucesso) {
                resolve({status: 'ok', dados: [1, 2, 3]});
            } else {
                reject(new Error("Erro ao chamar API"));
            }
        }, 2000);
    });
}