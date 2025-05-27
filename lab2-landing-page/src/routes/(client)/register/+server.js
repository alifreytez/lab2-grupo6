import { json } from '@sveltejs/kit';
import axios from 'axios';

export async function POST({ request }) {
    try {
        const data = await request.json();

        // 🔹 Validación de datos obligatorios
        if (!data.first_name || !data.last_name || !data.document_number || !data.birth_date || 
            !data.phone_number || !data.email || !data.password) {
            return json({ message: "Faltan datos obligatorios." }, { status: 400 });
        }

        console.log("Datos recibidos en el frontend:", data);

        // 🔹 Verificar si el usuario ya está registrado por `document_number`
        try {
            const checkUser = await axios.get(`http://localhost:3000/v1/public/client/user/check/${data.document_number}`);
            
            if (checkUser.data.exists) {
                console.log("⚠️ Usuario ya registrado con documento:", data.document_number);
                return json({ message: "⚠️ El usuario ya se encuentra registrado con este número de documento." }, { status: 400 });
            }
        } catch (error) {
            console.error("Error al verificar usuario:", error.response?.data || error.message);
        }

        // 🔹 Si el usuario no existe, hacer el registro
        const apiResponse = await axios.post('http://localhost:3000/v1/public/client/user/register', data);

        console.log("✅ Registro exitoso:", apiResponse.data);

        return json({ 
            message: "✅ Registro exitoso", 
            user: apiResponse.data.user, 
            jwt: apiResponse.data.jwt || null 
        }, { status: 201 });

    } catch (error) {
        console.error("Error en la conexión con la API:", error.response?.data || error.message);

        return json({
            message: "Error en el registro.",
            error: error.response?.data || error.message
        }, { status: error.response?.status || 500 });
    }
}
