import { json } from '@sveltejs/kit';
import axios from 'axios';

export async function POST({ request }) {
    try {
        const data = await request.json();

        // Validación de datos obligatorios
        if (!data.first_name || !data.last_name || !data.document_number || !data.birth_date || 
            !data.phone_number || !data.email || !data.password) {
            return json({ message: "Faltan datos obligatorios." }, { status: 400 });
        }

        console.log("Datos recibidos en el frontend:", data);

        // 🔹 Enviar la solicitud a la API de registro real
        const apiResponse = await axios.post('http://localhost:3000/v1/public/client/user/register', data);

        console.log("Respuesta de la API externa:", apiResponse.data);

        // Si la API devuelve un JWT, lo enviamos de vuelta al frontend
        return json({ 
            message: "Registro exitoso", 
            user: apiResponse.data.user, 
            jwt: apiResponse.data.jwt || null 
        });

    } catch (error) {
        console.error("Error en la conexión con la API:", error.response?.data || error.message);

        return json({
            message: "Error en el registro.",
            error: error.response?.data || error.message
        }, { status: error.response?.status || 500 });
    }
}

