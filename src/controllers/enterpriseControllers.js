let controller = {
	login: (req, res) => {
		res.render('empresas/login', { title: 'Login EMPRESAS' });
	},
	clubE: (req, res) => {
		res.render('empresas/landingEmpresas');
	},
	register: (req, res) => {
		res.render('empresas/cadastroEmpresa', { title: 'Cadastro EMRESAS' });
	},
	//create NO crea producto solo lo recupera al back
	create: (req, res) => {
		let newE = {
			nameE: req.body.nameE,
			emailE: req.body.emailE,
			webE: req.body.webE,
			checkE: req.body.checkE,
			notesE: req.body.notesE,
		};
		console.log(newE);
		let empresa = [];
		let neweEJSON = JSON.stringify(fs.readFileSync(localsCollection));
		app.get(newEJSON, (req, res) => {
			JSON.exports(__dirname, './../data/general_dataDataBase.json');
			empresa.push(newE);
		});
		res.send('Bien venido a APA');
	},
};
module.exports = controller;
