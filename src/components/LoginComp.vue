<template>
  <h1>Login</h1>
  <div style="width: 400px; margin: auto;">
    <Form @submit="onSubmit">
      <div class="f-input form-group">
        <Field name="email" type="email" class="form-control" :rules="validateEmail" />
        <div>
          <i style="font-size: 10px;">
            <ErrorMessage name="email" />
          </i>
        </div>
      </div>
      <div class="f-input">
        <Field name="password" type="password" class="form-control" :rules="validatePassword" />
        <div>
          <i style="font-size: 10px;">
            <ErrorMessage name="password" />
          </i>
        </div>
      </div>
      <button class="btn btn-primary">Login</button>
    </Form>
</div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';

export default {
  components: {
    Form,
    Field,
    ErrorMessage
  },

  methods: {
    onSubmit(values) {
      localStorage.setItem("auth", JSON.stringify(values.email));
      this.$router.push('/blogs');
      this.$store.dispatch('isLogin', true);
      localStorage.setItem('isLogin', JSON.stringify(true))
    },

    validateEmail(value) {
      if (!value) return 'This field is required';

      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) return 'This field must be a valid email';

      return true;
    },

    validatePassword(value) {
      if (!value) return 'This field is required';

      if (value.length < 8) return 'This field must be great than 8 character';

      return true;
    },
  }
}
</script>

<style scoped>
.f-input {
  margin-bottom: 5px;
}
</style>
