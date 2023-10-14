import * as Yup from 'yup'

const emailRules =
	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export const BasicSchema = Yup.object().shape({
	name: Yup.string()
		.min(4, 'El campo nombre debe tener como minimo 4 caracteres')
		.max(50, 'El campo nombre debe tener como minimo 50 caracteres')
		.matches(
			/^[áéíóúÁÉÍÓÚñÑ\a-zA-Z ]+$/,
			'Solamente se permiten letras y espacios en blanco',
		)
		.required('El campo nombre no puede estar vacio'),
	email: Yup.string()
		.email('Ingresa un email valido')
		.matches(emailRules, {
			message: 'Ingresa un email valido',
			excludeEmptyString: true,
		})
		.required('El campo email no puede estar vacio'),
	msg: Yup.string()
		.min(10, 'El campo mensaje debe tener como minimo 10 caracteres')
		.max(500, 'El campo mensaje debe tener como minimo 500 caracteres')
		.matches(/^[áéíóúÁÉÍÓÚñÑ\w\s\?\!\$\@\.\,]+$/, {
			message:
				'Solamente se permiten letras, espacios y los siguientes caracteres (?!,.$@)',
			excludeEmptyString: true,
		})
		.required('El campo mensaje no puede estar vacio'),
})
