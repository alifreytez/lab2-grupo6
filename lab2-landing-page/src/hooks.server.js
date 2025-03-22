import { TITLE_BASE } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

export const handle = async ({ event, resolve }) => {
	// Preparar variables para el frontend.
	event.locals = {
		...event.locals, // Desestructuración del objeto mismo en caso de haber datos antes de este punto.
        TITLE_BASE,
        XPR: {	// Variable de expresiones regulares.
            
        }
	};
	event.setTitle = (title) => (`${TITLE_BASE} | ${title.split(' ').map((word, index) => {
		const connectors = [
			'a', 'ante', 'bajo', 'cabe', 'con', 'contra', 'de', 'desde', 'durante', 'en', 'entre', 'hacia', 'hasta', 'mediante', 'para', 'por', 'según', 'sin', 'so', 'sobre', 'tras', 'versus', 'vía',
		];

		return index > 0 && connectors.includes(word.toLowerCase()) ? word : word[0].toUpperCase() + word.slice(1);
	}).join(' ')}`);
	event.showError = (error) => console.error(`[ ${new Date().toLocaleString('es-VE')} ] ¡ERROR! --> ${error}\n`);

	return resolve(event);
}