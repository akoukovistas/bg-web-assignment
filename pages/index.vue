<template>
  <div class="container">
    <div class="login-box">
      <div class="login-box__branding login-box__element-container">
        <h2>Blueground on <span class="mars-circle mars-circle__primary">Mars</span></h2>
      </div>
      <div class="login-box__form-fields form login-box__element-container">
        <input type="text" id="colonist_id" class="form__input" v-on:click="adjustInput" :placeholder="colonist_placeholder">
        <label for="colonist_id" class="form__input-label">{{colonist_placeholder}}</label>
        <input type="password" id="password" class="form__input" v-on:click="adjustInput" :placeholder="password_placeholder">
        <label for="password" class="form__input-label">{{password_placeholder}}</label>
      </div>
      <div class="login-box__form-actions login-box__element-container">
        <input class="form__submit" type="submit" value="Sign In"/>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      colonist_placeholder: "Colonist ID",
      password_placeholder: "Password"
    }
  },
  methods: {
      // Clear the input and display the label on element click.
      adjustInput: function (input) {
        input.target.setAttribute("placeholder","");
        document.body.querySelector('.form__input-label[for="' + input.target.getAttribute('id') + '"]').style.display = "block";
      }

  }
}

</script>

<style>

.container {
	margin: 0 auto;
	min-height: 100vh;
	justify-content: center;
	text-align: center;
	display: grid;
	grid-template-columns: repeat( 3, 1fr );
	grid-template-rows: 20% 350px 200px;
}

.login-box {
	border: 1px solid #000;
	grid-column: 2 / span 1;
	grid-row: 2 / span 1;
	display: flex;
	flex-direction: column;

	padding: 1rem 3rem;
	box-shadow: 5px 5px 8px #888888;
}

.login-box__element-container {
	padding: 1rem;
}

.login-box__branding h2 {
	float: left;
}

.login-box__form-fields {
	display: flex;
	flex-direction: column;
}

.login-box__form-fields .form__input {
	border: none;
	border-bottom: 1px solid #000;
	font-size: 1.7rem;
	line-height: 1.7rem;
	margin: 1rem 0;
}

.login-box__form-fields .form__input-label {
	text-align: left;
	margin-top: -1rem;
	display:none;
}

.login-box__form-actions .form__submit {
	float: right;
	background: lightgrey;
	border:none;
	color: grey;
	padding: 1rem;
	font-size: inherit;
}

.mars-circle {
	border-radius: 100%;
	padding: 1.2rem 0.5rem;
	text-align: center;
}

.mars-circle__primary {
	background-color: black;
	color: white;
}

</style>
