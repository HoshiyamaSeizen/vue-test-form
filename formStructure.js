const formStructure = [
	{
		name: 'Общая информация',
		fields: [
			{
				name: 'Имя',
				key: 'firstName',
				type: 'text',
				validators: {
					required,
					$autoDirty: true,
				},
			},
			{
				name: 'Фамилия',
				key: 'lastName',
				type: 'text',
				validators: { required, $autoDirty: true },
			},
			{ name: 'Отчество', key: 'middleName', type: 'text', validators: { $autoDirty: true } },
			{
				name: 'Дата рождения',
				key: 'dateOfBirth',
				type: 'date',
				validators: { required, $autoDirty: true },
			},
			{
				name: 'Номер телефона',
				key: 'phone',
				type: 'tel',
				validators: { required, telephone, $autoDirty: true },
			},
			{
				name: 'Пол',
				key: 'gender',
				type: 'text',
				validators: { $autoDirty: true },
			},
			{
				name: 'Группа клиентов',
				key: 'group',
				type: 'select',
				validators: { required, $autoDirty: true },
				multiple: true,
				options: ['VIP', 'Проблемные', 'ОМС'],
			},
			{
				name: 'Лечащий врач',
				key: 'doctor',
				type: 'select',
				validators: { $autoDirty: true },
				options: ['Иванов', 'Захаров', 'Чернышева'],
			},
			{
				name: 'Не отправлять СМС',
				key: 'noSMS',
				type: 'checkbox',
				validators: { $autoDirty: true },
			},
		],
	},
	{
		name: 'Адрес',
		fields: [
			{
				name: 'Индекс',
				key: 'index',
				type: 'text',
				validators: { $autoDirty: true },
			},
			{
				name: 'Страна',
				key: 'country',
				type: 'text',
				validators: { $autoDirty: true },
			},
			{
				name: 'Область',
				key: 'region',
				type: 'text',
				validators: { $autoDirty: true },
			},
			{
				name: 'Город',
				key: 'city',
				type: 'text',
				validators: { required, $autoDirty: true },
			},
			{
				name: 'Улица',
				key: 'street',
				type: 'text',
				validators: { $autoDirty: true },
			},
			{
				name: 'Дом',
				key: 'house',
				type: 'text',
				validators: { $autoDirty: true },
			},
		],
	},
	{
		name: 'Паспорт',
		fields: [
			{
				name: 'Тип документа',
				key: 'document',
				type: 'select',
				validators: { required, $autoDirty: true },
				options: ['Паспорт', 'Свидетельство о рождении', 'Вод. удостоверение'],
			},
			{
				name: 'Серия',
				key: 'pSerial',
				type: 'text',
				validators: { $autoDirty: true },
			},
			{
				name: 'Номер',
				key: 'pNumber',
				type: 'text',
				validators: { $autoDirty: true },
			},
			{
				name: 'Кем выдан',
				key: 'pSource',
				type: 'text',
				validators: { $autoDirty: true },
			},
			{
				name: 'Дата выдачи',
				key: 'pDate',
				type: 'date',
				validators: { required, $autoDirty: true },
			},
		],
	},
];
const fields = [].concat(...formStructure.map((group) => group.fields));
const initValues = fields.reduce(
	(acc, curr) => ((acc[curr.key] = curr.multiple ? [] : ''), acc),
	{}
);
const validators = fields.reduce((acc, curr) => ((acc[curr.key] = curr.validators), acc), {});
