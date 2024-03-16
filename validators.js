let { required, helpers } = VuelidateValidators;
let telephone = helpers.regex(/^\+7\d{10}$/);

required = helpers.withMessage('Это обязательное поле', required);
telephone = helpers.withMessage('Формат телефона: +7xxxxxxxxxx', telephone);
