Vue.config.devtools = true;

const { useVuelidate } = Vuelidate;

Vue.component('form-input', {
	props: ['field', 'value', 'v$'],
	data() {
		return {
			values: this.value,
		};
	},
	computed: {
		error() {
			return this.v$.values[this.field.key]?.$errors[0] || {};
		},
	},
	template: `
        <div class="form__block" :class="{ 'block-error': error.$message  }">
            <label class="form__label" :for="field.key">
				{{field.name}}
				<span class="text-required" v-show="field.validators.required">*</span>
			</label>
            <div v-show="error" class="text-error">{{ error.$message }}</div>
            <input class="form__input" 
				v-if="field.type!=='select'" 
				:id="field.key" 
				:type="field.type" 
				:value='value' 
				@input='$emit("input", $event.target.value)'
			/>
            <select class="form__select"
				v-else 
				:id="field.key" 
				v-model="values" 
				@change='$emit("input", values)' 
				:multiple="field.multiple"
			>
                <option v-for="option of field.options" :value="option">{{option}}</option>
            </select>
        </div>
    `,
});

const app = new Vue({
	el: '#form',
	setup() {
		return { v$: useVuelidate() };
	},
	data() {
		return { values: initValues, formStructure, userCreated: false };
	},
	validations() {
		return { values: validators };
	},
	methods: {
		async createUser() {
			const result = await this.v$.$validate();
			this.userCreated = result;
			if (result) console.log(this.values);
			else this.v$.values.$touch();
		},
	},
});
